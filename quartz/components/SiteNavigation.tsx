import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { pathToRoot, joinSegments } from "../util/path"
import { siteSection } from "../util/site"
import style from "./styles/personal.scss"

const SiteNavigation: QuartzComponent = ({ fileData, cfg }) => {
  const base =
    fileData.slug === "404"
      ? new URL(`https://${cfg.baseUrl}`).pathname
      : pathToRoot(fileData.slug!)
  const section = siteSection(fileData.slug)
  return (
    <nav class="site-navigation" aria-label="Main navigation">
      <a class="site-name" href={joinSegments(base, "/")}>
        Nunziato Damino
        <span class="name-dot" aria-hidden="true">
          .
        </span>
      </a>
      <div class="site-links">
        <a href={joinSegments(base, "/")} aria-current={section === "home" ? "page" : undefined}>
          Home
        </a>
        <a
          href={joinSegments(base, "painter/")}
          aria-current={section === "painter" ? "page" : undefined}
        >
          Painter
        </a>
        <a
          href={joinSegments(base, "physicist/")}
          aria-current={section === "physicist" && fileData.slug !== "404" ? "page" : undefined}
        >
          Physicist
        </a>
      </div>
    </nav>
  )
}

SiteNavigation.css = style
export default (() => SiteNavigation) satisfies QuartzComponentConstructor
