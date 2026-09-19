import { Exhibition } from "../util/site"
import { FullSlug, joinSegments, pathToRoot, resolveRelative } from "../util/path"

export default function ExhibitionList({
  exhibitions,
  slug,
}: {
  exhibitions: Exhibition[]
  slug: FullSlug
}) {
  const base = pathToRoot(slug)
  return (
    <div class="exhibition-list">
      {exhibitions.map((exhibition) => (
        <a
          class={`exhibition-card${exhibition.poster ? "" : " exhibition-card-text"}`}
          key={exhibition.slug}
          href={resolveRelative(slug, exhibition.slug)}
        >
          {exhibition.poster && (
            <img
              src={joinSegments(base, exhibition.poster)}
              alt={`Poster for ${exhibition.title}`}
              loading="lazy"
              decoding="async"
            />
          )}
          <div>
            <h3>{exhibition.title}</h3>
            {exhibition.role && <p class="exhibition-role">{exhibition.role}</p>}
            <p class="exhibition-dates">{exhibition.dates}</p>
            <p>
              {exhibition.venue}
              <br />
              {exhibition.location}
            </p>
          </div>
          <span class="exhibition-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      ))}
    </div>
  )
}
