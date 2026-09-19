import { Artwork } from "../util/site"
import { FullSlug, joinSegments, pathToRoot, resolveRelative } from "../util/path"

export default function PaintingGrid({ works, slug }: { works: Artwork[]; slug: FullSlug }) {
  const base = pathToRoot(slug)
  return (
    <div class="painting-grid">
      {works.map((work) => (
        <a class="painting-card" href={resolveRelative(slug, work.slug)} key={work.slug}>
          <figure>
            <div class="painting-image">
              <img
                src={joinSegments(base, work.image)}
                alt={work.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <h3>{work.title}</h3>
              {work.year && <span>{work.year}</span>}
              {(work.medium || work.dimensions) && (
                <p>{[work.medium, work.dimensions].filter(Boolean).join(" · ")}</p>
              )}
              {work.detailsPending && <p class="details-pending">Details forthcoming</p>}
              {work.section === "opere-disperse" && (
                <p class="artwork-status">{work.status ?? "Status forthcoming"}</p>
              )}
            </figcaption>
          </figure>
        </a>
      ))}
    </div>
  )
}
