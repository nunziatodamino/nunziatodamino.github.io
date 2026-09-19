import { QuartzComponent } from "../types"
import { getExhibition, sortedExhibitions, exhibitionArtworks } from "../../util/site"
import { joinSegments, pathToRoot } from "../../util/path"
import { htmlToJsx } from "../../util/jsx"
import PaintingGrid from "../PaintingGrid"
import ExhibitionList from "../ExhibitionList"

const ExhibitionPage: QuartzComponent = ({ fileData, allFiles, tree }) => {
  const base = pathToRoot(fileData.slug!)
  if (fileData.slug === "painter/exhibitions/index") {
    return (
      <main class="personal-content exhibition-content" id="main-content">
        <a class="text-link" href={joinSegments(base, "painter/")}>
          ← The painter
        </a>
        <div class="gallery-intro">
          <h1>Exhibitions</h1>
        </div>
        <ExhibitionList exhibitions={sortedExhibitions(allFiles)} slug={fileData.slug!} />
      </main>
    )
  }
  const exhibition = getExhibition(fileData)!
  const works = exhibitionArtworks(exhibition, allFiles)
  const posterFormat = exhibition.posterOriginalSource?.split(".").pop()!.toUpperCase()
  return (
    <main class="personal-content exhibition-content" id="main-content">
      <a class="text-link" href={joinSegments(base, "painter/exhibitions/")}>
        ← Exhibitions
      </a>
      <div class={`exhibition-intro${exhibition.poster ? "" : " exhibition-intro-text"}`}>
        <div>
          <h1>{exhibition.title}</h1>
          {exhibition.role && <p class="exhibition-role">{exhibition.role}</p>}
          <p class="exhibition-dates">{exhibition.dates}</p>
          <p>
            {exhibition.venue}
            <br />
            {exhibition.location}
          </p>
          <article>{htmlToJsx(fileData.filePath!, tree)}</article>
        </div>
        {exhibition.poster && exhibition.posterOriginal && (
          <figure class="exhibition-poster">
            <a
              href={joinSegments(base, exhibition.posterOriginal)}
              data-router-ignore
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${exhibition.title} poster ${posterFormat} in a new tab`}
            >
              <img
                src={joinSegments(base, exhibition.poster)}
                alt={`Original poster for ${exhibition.title}, ${exhibition.dates}, ${exhibition.venue}, ${exhibition.location}`}
                decoding="async"
              />
            </a>
            <figcaption>
              <a
                class="text-link"
                href={joinSegments(base, exhibition.posterOriginal)}
                data-router-ignore
                target="_blank"
                rel="noopener noreferrer"
              >
                Original poster ({posterFormat}) ↗
              </a>
            </figcaption>
          </figure>
        )}
      </div>
      {works.length > 0 && (
        <section aria-labelledby="exhibited-paintings">
          <h2 class="collection-heading" id="exhibited-paintings">
            {works.length === 1 ? "Exhibited painting" : "Selected paintings"}
          </h2>
          <PaintingGrid works={works} slug={fileData.slug!} />
        </section>
      )}
    </main>
  )
}

export default ExhibitionPage
