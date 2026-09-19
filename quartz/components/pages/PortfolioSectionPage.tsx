import { QuartzComponent } from "../types"
import { getPortfolioSection, sectionArtworks } from "../../util/site"
import { joinSegments, pathToRoot } from "../../util/path"
import { htmlToJsx } from "../../util/jsx"
import PaintingGrid from "../PaintingGrid"

const PortfolioSectionPage: QuartzComponent = ({ fileData, allFiles, tree }) => {
  const base = pathToRoot(fileData.slug!)
  const section = getPortfolioSection(fileData)!
  const works = sectionArtworks(section, allFiles)

  return (
    <main class="personal-content portfolio-section-content" id="main-content">
      <a class="text-link" href={joinSegments(base, "painter/")}>
        ← Portfolio
      </a>
      <div class="portfolio-section-intro">
        <p class="eyebrow">Portfolio</p>
        <h1>{section.title}</h1>
        <p>{section.description}</p>
      </div>
      <article class="portfolio-section-note">{htmlToJsx(fileData.filePath!, tree)}</article>
      {section.images.length > 0 ? (
        <div class="series-gallery">
          {section.images.map((item) => (
            <figure key={item.image}>
              <img
                src={joinSegments(base, item.image)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <PaintingGrid works={works} slug={fileData.slug!} />
      )}
    </main>
  )
}

export default PortfolioSectionPage
