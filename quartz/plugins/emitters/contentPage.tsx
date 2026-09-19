import path from "path"
import fs from "fs/promises"
import { visit } from "unist-util-visit"
import { Root } from "hast"
import { VFile } from "vfile"
import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { Argv } from "../../util/ctx"
import { FilePath, isRelativeURL, joinSegments, pathToRoot } from "../../util/path"
import {
  defaultContentPageLayout,
  personalPageLayout,
  sharedPageComponents,
} from "../../../quartz.layout"
import { Content } from "../../components"
import chalk from "chalk"
import { write } from "./helpers"
import DepGraph from "../../depgraph"
import {
  getArtwork,
  getExhibition,
  exhibitionArtworks,
  getPortfolioSection,
  isPhysicsPage,
} from "../../util/site"

// get all the dependencies for the markdown file
// eg. images, scripts, stylesheets, transclusions
const parseDependencies = (argv: Argv, hast: Root, file: VFile): string[] => {
  const dependencies: string[] = []

  visit(hast, "element", (elem): void => {
    let ref: string | null = null

    if (
      ["script", "img", "audio", "video", "source", "iframe"].includes(elem.tagName) &&
      elem?.properties?.src
    ) {
      ref = elem.properties.src.toString()
    } else if (["a", "link"].includes(elem.tagName) && elem?.properties?.href) {
      // transclusions will create a tags with relative hrefs
      ref = elem.properties.href.toString()
    }

    // if it is a relative url, its a local file and we need to add
    // it to the dependency graph. otherwise, ignore
    if (ref === null || !isRelativeURL(ref)) {
      return
    }

    let fp = path.join(file.data.filePath!, path.relative(argv.directory, ref)).replace(/\\/g, "/")
    // markdown files have the .md extension stripped in hrefs, add it back here
    if (!fp.split("/").pop()?.includes(".")) {
      fp += ".md"
    }
    dependencies.push(fp)
  })

  return dependencies
}

export const ContentPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "ContentPage",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...left,
        ...right,
        Footer,
        personalPageLayout.pageBody,
      ]
    },
    async getDependencyGraph(ctx, content, _resources) {
      const graph = new DepGraph<FilePath>()

      for (const [tree, file] of content) {
        const sourcePath = file.data.filePath!
        const slug = file.data.slug!
        graph.addEdge(sourcePath, joinSegments(ctx.argv.output, slug + ".html") as FilePath)
        const artwork = getArtwork(file.data)
        if (artwork) {
          graph.addEdge(
            sourcePath,
            joinSegments(ctx.argv.directory, "painter/index.md") as FilePath,
          )
          graph.addEdge(
            joinSegments(ctx.argv.directory, artwork.imageSource) as FilePath,
            sourcePath,
          )
          const section = content.find(
            ([, candidate]) =>
              candidate.data.frontmatter?.section === artwork.section &&
              getPortfolioSection(candidate.data),
          )
          if (section) graph.addEdge(sourcePath, section[1].data.filePath!)
        }
        const portfolioSection = getPortfolioSection(file.data)
        if (portfolioSection) {
          graph.addEdge(
            sourcePath,
            joinSegments(ctx.argv.directory, "painter/index.md") as FilePath,
          )
          for (const asset of [
            portfolioSection.coverSource,
            ...portfolioSection.images.map((image) => image.imageSource),
          ]) {
            graph.addEdge(joinSegments(ctx.argv.directory, asset) as FilePath, sourcePath)
          }
        }
        const exhibition = getExhibition(file.data)
        if (exhibition) {
          for (const asset of [exhibition.posterSource, exhibition.posterOriginalSource]) {
            if (!asset) continue
            graph.addEdge(joinSegments(ctx.argv.directory, asset) as FilePath, sourcePath)
          }
          for (const index of ["painter/index.md", "painter/exhibitions/index.md"]) {
            graph.addEdge(sourcePath, joinSegments(ctx.argv.directory, index) as FilePath)
          }
          for (const paintingSlug of exhibition.artworks) {
            const painting = content.find(([, candidate]) => candidate.data.slug === paintingSlug)
            if (painting) graph.addEdge(painting[1].data.filePath!, sourcePath)
          }
        }

        parseDependencies(ctx.argv, tree as Root, file).forEach((dep) => {
          graph.addEdge(dep as FilePath, sourcePath)
        })
      }

      return graph
    },
    async emit(ctx, content, resources): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)

      for (const file of allFiles) {
        const artwork = getArtwork(file)
        if (artwork) {
          await fs.access(path.join(ctx.argv.directory, artwork.imageSource)).catch(() => {
            throw new Error(`Painting ${file.slug}: image not found: ${artwork.imageSource}`)
          })
        }
        const portfolioSection = getPortfolioSection(file)
        if (portfolioSection) {
          for (const asset of [
            portfolioSection.coverSource,
            ...portfolioSection.images.map((image) => image.imageSource),
          ]) {
            await fs.access(path.join(ctx.argv.directory, asset)).catch(() => {
              throw new Error(`Portfolio section ${file.slug}: file not found: ${asset}`)
            })
          }
        }
        const exhibition = getExhibition(file)
        if (exhibition) {
          exhibitionArtworks(exhibition, allFiles)
          for (const asset of [exhibition.posterSource, exhibition.posterOriginalSource]) {
            if (!asset) continue
            await fs.access(path.join(ctx.argv.directory, asset)).catch(() => {
              throw new Error(`Exhibition ${file.slug}: file not found: ${asset}`)
            })
          }
        }
      }

      let containsIndex = false
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        if (slug === "index") {
          containsIndex = true
        }

        const externalResources = pageResources(pathToRoot(slug), resources)
        const componentData: QuartzComponentProps = {
          ctx,
          fileData: file.data,
          externalResources,
          cfg,
          children: [],
          tree,
          allFiles,
        }

        const layout = isPhysicsPage(file.data) ? opts : personalPageLayout
        const content = renderPage(cfg, slug, componentData, layout, externalResources)
        const fp = await write({
          ctx,
          content,
          slug,
          ext: ".html",
        })

        fps.push(fp)
      }

      if (!containsIndex && !ctx.argv.fastRebuild) {
        console.log(
          chalk.yellow(
            `\nWarning: you seem to be missing an \`index.md\` home page file at the root of your \`${ctx.argv.directory}\` folder. This may cause errors when deploying.`,
          ),
        )
      }

      return fps
    },
  }
}
