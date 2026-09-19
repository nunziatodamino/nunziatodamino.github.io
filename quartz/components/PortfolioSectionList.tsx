import { PortfolioSection, sectionArtworks } from "../util/site"
import { FullSlug, joinSegments, pathToRoot, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"

export default function PortfolioSectionList({
  sections,
  files,
  slug,
}: {
  sections: PortfolioSection[]
  files: QuartzPluginData[]
  slug: FullSlug
}) {
  const base = pathToRoot(slug)
  return (
    <div class="portfolio-section-grid">
      {sections.map((section) => {
        const count = section.images.length || sectionArtworks(section, files).length
        const unit =
          section.images.length > 0
            ? count === 1
              ? "passage"
              : "passages"
            : count === 1
              ? "work"
              : "works"
        return (
          <a
            class="portfolio-section-card"
            href={resolveRelative(slug, section.slug)}
            key={section.slug}
          >
            <div class="portfolio-section-image">
              <img src={joinSegments(base, section.cover)} alt="" loading="lazy" decoding="async" />
            </div>
            <div class="portfolio-section-copy">
              <div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
              <span class="portfolio-section-count">
                {count} {unit} ↗
              </span>
            </div>
          </a>
        )
      })}
    </div>
  )
}
