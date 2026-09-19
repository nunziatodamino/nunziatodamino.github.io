import { QuartzComponent, QuartzComponentConstructor } from "../types"
import { joinSegments, pathToRoot, resolveRelative } from "../../util/path"
import { getArtwork, sortedArtworks, sortedExhibitions, isExhibitionPage } from "../../util/site"
import { htmlToJsx } from "../../util/jsx"
import PaintingGrid from "../PaintingGrid"
import ExhibitionList from "../ExhibitionList"
import ExhibitionPage from "./ExhibitionPage"
// @ts-ignore
import homeScript from "../scripts/home.inline"

const PersonalPage: QuartzComponent = (props) => {
  const { fileData, allFiles, tree } = props
  const base = pathToRoot(fileData.slug!)
  if (fileData.slug === "index") {
    return (
      <main class="personal-content home-content" id="main-content">
        <h1 class="home-question">Are you interested in the painter or the physicist?</h1>
        <div class="worlds" aria-label="Choose a perspective">
          <a
            class="world world-painter"
            href={joinSegments(base, "painter/")}
            aria-label="The painter"
          >
            <img
              class="world-background"
              src={joinSegments(base, "static/home/painter.webp")}
              alt=""
              loading="eager"
              decoding="async"
            />
            <span class="world-shade" aria-hidden="true" />
            <span class="world-spotlight" aria-hidden="true" />
            <div class="world-copy">
              <h2>The painter</h2>
            </div>
          </a>
          <a
            class="world world-physicist"
            href={joinSegments(base, "physicist/")}
            aria-label="The physicist"
          >
            <img
              class="world-background"
              src={joinSegments(base, "static/home/physicist.svg")}
              alt=""
              loading="eager"
              decoding="async"
            />
            <span class="world-shade" aria-hidden="true" />
            <span class="world-spotlight" aria-hidden="true" />
            <div class="world-copy">
              <h2>The physicist</h2>
            </div>
          </a>
        </div>
      </main>
    )
  }

  if (isExhibitionPage(fileData)) {
    return <ExhibitionPage {...props} />
  }

  if (fileData.slug === "painter/index") {
    const works = sortedArtworks(allFiles)
    const exhibitions = sortedExhibitions(allFiles)
    return (
      <main class="personal-content painter-content" id="main-content">
        <div class="gallery-intro">
          <h1>The painter</h1>
        </div>
        {exhibitions.length > 0 && (
          <section class="painter-exhibitions" aria-labelledby="exhibitions-heading">
            <div class="collection-heading-row">
              <h2 class="collection-heading" id="exhibitions-heading">
                Exhibitions
              </h2>
              <a class="text-link" href={joinSegments(base, "painter/exhibitions/")}>
                All exhibitions ↗
              </a>
            </div>
            <ExhibitionList exhibitions={exhibitions} slug={fileData.slug!} />
          </section>
        )}
        {works.length === 0 ? (
          <section class="gallery-empty" aria-labelledby="coming-soon">
            <h2 id="coming-soon">Selected paintings — coming soon.</h2>
          </section>
        ) : (
          <section id="paintings" aria-labelledby="paintings-heading">
            <h2 class="collection-heading" id="paintings-heading">
              Selected paintings
            </h2>
            <PaintingGrid works={works} slug={fileData.slug!} />
          </section>
        )}
      </main>
    )
  }

  const work = getArtwork(fileData)!
  const exhibitions = sortedExhibitions(allFiles).filter((exhibition) =>
    exhibition.artworks.includes(work.slug),
  )
  return (
    <main class="personal-content artwork-content" id="main-content">
      <a class="text-link" href={joinSegments(base, "painter/")}>
        ← All paintings
      </a>
      <figure class="artwork">
        <img src={joinSegments(base, work.image)} alt={work.alt} decoding="async" />
        <figcaption>
          <p class="eyebrow">{work.year ? `${work.year} / Painting` : "Painting"}</p>
          <h1>{work.title}</h1>
          <p>{[work.medium, work.dimensions].filter(Boolean).join(" · ")}</p>
        </figcaption>
      </figure>
      <article>{htmlToJsx(fileData.filePath!, tree)}</article>
      {exhibitions.length > 0 && (
        <nav class="artwork-exhibitions" aria-label="Exhibitions featuring this painting">
          <h2>Exhibitions</h2>
          {exhibitions.map((exhibition) => (
            <a
              class="text-link"
              key={exhibition.slug}
              href={resolveRelative(fileData.slug!, exhibition.slug)}
            >
              {exhibition.title} · {exhibition.year}
            </a>
          ))}
        </nav>
      )}
    </main>
  )
}

PersonalPage.afterDOMLoaded = homeScript
export default (() => PersonalPage) satisfies QuartzComponentConstructor
