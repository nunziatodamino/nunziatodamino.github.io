import test from "node:test"
import assert from "node:assert/strict"
import {
  getArtwork,
  isPhysicsPage,
  sortedArtworks,
  getExhibition,
  sortedExhibitions,
  exhibitionArtworks,
  getPortfolioSection,
  sortedPortfolioSections,
  sectionArtworks,
} from "./site"
import { FullSlug } from "./path"
import { QuartzPluginData } from "../plugins/vfile"

const painting = (slug: string, order: number): QuartzPluginData => ({
  slug: slug as FullSlug,
  frontmatter: {
    title: "A painting",
    image: "painter/images/A painting.webp",
    alt: "Ochre shapes against a blue background",
    year: 2026,
    medium: "Oil on canvas",
    dimensions: "40 × 60 cm",
    order,
  },
})

test("existing notes remain physics pages, while personal pages are excluded", () => {
  for (const slug of [
    "physicist/index",
    "Calculations/A-note",
    "tags/index",
    "Zettelkasten/Physics",
  ]) {
    assert.equal(isPhysicsPage({ slug: slug as FullSlug }), true)
  }
  for (const slug of [
    "index",
    "painter/index",
    "painter/study",
    "painter/exhibitions/index",
    "painter/exhibitions/i-notturni/index",
  ]) {
    assert.equal(isPhysicsPage({ slug: slug as FullSlug }), false)
  }
})

const exhibition = (year = 2018): QuartzPluginData => ({
  slug: `painter/exhibitions/test-${year}/index` as FullSlug,
  frontmatter: {
    title: "I notturni",
    year,
    dates: "9–16 August 2018",
    venue: "Palazzo Cagnone",
    location: "Francavilla di Sicilia",
    poster: "painter/images/i-notturni/poster.webp",
    posterPdf: "painter/images/i-notturni/locandina.pdf",
    artworks: ["painter/b", "painter/a"],
  },
})

test("exhibitions do not become paintings and keep their own curated artwork order", () => {
  const show = exhibition()
  const files = [
    show,
    painting("painter/a", 10),
    painting("painter/b", 20),
    { slug: "painter/exhibitions/index" as FullSlug },
  ]
  assert.equal(getArtwork(show), undefined)
  assert.equal(sortedArtworks(files).length, 2)
  assert.equal(sortedExhibitions(files).length, 1)
  assert.deepEqual(
    exhibitionArtworks(getExhibition(show)!, files).map((work) => work.slug),
    ["painter/b", "painter/a"],
  )
  assert.deepEqual(
    sortedExhibitions([exhibition(2018), exhibition(2020)]).map((show) => show.year),
    [2020, 2018],
  )
})

test("unknown painting dates and dimensions remain absent instead of being invented", () => {
  const work = painting("painter/unknown-size", 10)
  delete work.frontmatter!.dimensions
  delete work.frontmatter!.year
  assert.equal(getArtwork(work)!.dimensions, undefined)
  assert.equal(getArtwork(work)!.year, undefined)
})

test("exhibitions support image posters and art direction credits alongside legacy PDFs", () => {
  assert.equal(
    getExhibition(exhibition())!.posterOriginal,
    "painter/images/i-notturni/locandina.pdf",
  )
  const show = exhibition(2019)
  delete show.frontmatter!.posterPdf
  show.frontmatter!.posterOriginal = "painter/images/allucinazione-collettiva/locandina.jpg"
  show.frontmatter!.role = "Art director and exhibiting artist"
  assert.equal(getExhibition(show)!.posterOriginal, show.frontmatter!.posterOriginal)
  assert.equal(getExhibition(show)!.role, "Art director and exhibiting artist")
  for (const source of [
    "https://example.com/poster.jpg",
    "painter/images/../poster.jpg",
    "painter/images/poster.html",
  ]) {
    show.frontmatter!.posterOriginal = source
    assert.throws(() => getExhibition(show), /local files/)
  }
})

test("exhibitions without posters or identified artworks are listed without invented assets", () => {
  const show = exhibition(2021)
  delete show.frontmatter!.poster
  delete show.frontmatter!.posterPdf
  show.frontmatter!.dates = "2021"
  show.frontmatter!.artworks = []
  const entry = getExhibition(show)!
  assert.equal(entry.poster, undefined)
  assert.equal(entry.posterOriginal, undefined)
  assert.equal(entry.dates, "2021")
  assert.deepEqual(exhibitionArtworks(entry, []), [])
  assert.equal(sortedExhibitions([exhibition(), show])[0].year, 2021)
  show.frontmatter!.posterOriginal = "painter/images/poster.jpg"
  assert.throws(() => getExhibition(show), /missing poster/)
})

test("exhibitions reject missing paintings, duplicates, and non-local posters", () => {
  const show = exhibition()
  assert.throws(() => exhibitionArtworks(getExhibition(show)!, []), /missing or unpublished/)
  show.frontmatter!.artworks = ["painter/a", "painter/a"]
  assert.throws(() => getExhibition(show), /duplicate painting/)
  show.frontmatter!.artworks = []
  show.frontmatter!.posterPdf = "https://example.com/poster.pdf"
  assert.throws(() => getExhibition(show), /local files/)
})

test("gallery handles an empty collection and orders paintings by explicit order", () => {
  assert.deepEqual(sortedArtworks([{ slug: "painter/index" as FullSlug }]), [])
  const works = sortedArtworks([
    painting("painter/b", 20),
    painting("painter/c", 10),
    painting("painter/a", 10),
  ])
  assert.deepEqual(
    works.map((work) => work.slug),
    ["painter/a", "painter/c", "painter/b"],
  )
  assert.equal(works[0].year, "2026")
  assert.equal(works[0].image, "painter/images/A-painting.webp")
})

test("incomplete or invalid paintings fail with actionable errors", () => {
  const file = painting("painter/example", 1)
  delete file.frontmatter!.alt
  assert.throws(() => getArtwork(file), /missing alt/)
  file.frontmatter!.alt = "A painting"
  file.frontmatter!.order = "first"
  assert.throws(() => getArtwork(file), /order must be a number/)
  file.frontmatter!.order = 1
  for (const image of ["https://example.com/image.jpg", "painter/images/../../file.png"]) {
    file.frontmatter!.image = image
    assert.throws(() => getArtwork(file), /local file in painter\/images/)
  }
})

const portfolioSection = (id: string, order = 10): QuartzPluginData => ({
  slug: `painter/portfolio/${id}/index` as FullSlug,
  frontmatter: {
    title: id,
    section: id,
    description: `${id} works`,
    order,
    cover: `painter/images/${id}/cover.webp`,
  },
})

test("portfolio section pages do not become paintings and group works by section", () => {
  const section = portfolioSection("monotipi")
  const first = painting("painter/m01", 10)
  first.frontmatter!.section = "monotipi"
  first.frontmatter!.catalogId = "M01"
  const second = painting("painter/p01", 20)
  second.frontmatter!.section = "paintings"
  assert.equal(getArtwork(section), undefined)
  assert.equal(getPortfolioSection(section)!.id, "monotipi")
  assert.deepEqual(sectionArtworks(getPortfolioSection(section)!, [first, second]), [
    getArtwork(first),
  ])
})

test("new paintings may use stable catalogue IDs and pending metadata", () => {
  const work = painting("painter/m01", 10)
  delete (work.frontmatter as Record<string, unknown>).title
  delete work.frontmatter!.medium
  delete work.frontmatter!.dimensions
  work.frontmatter!.catalogId = "M01"
  work.frontmatter!.detailsPending = true
  const parsed = getArtwork(work)!
  assert.equal(parsed.title, "Untitled M01")
  assert.equal(parsed.medium, undefined)
  assert.equal(parsed.detailsPending, true)
  const duplicate = painting("painter/m02", 20)
  duplicate.frontmatter!.catalogId = "M01"
  assert.throws(() => sortedArtworks([work, duplicate]), /unique catalogue identifiers/)
})

test("portfolio sections validate unique IDs and local series images", () => {
  const section = portfolioSection("from-the-scrolls")
  section.frontmatter!.images = [
    {
      image: "painter/images/scrolls/passage-01.webp",
      alt: "A painted passage",
      caption: "Passage 01 — Caption forthcoming",
    },
  ]
  assert.equal(getPortfolioSection(section)!.images.length, 1)
  assert.throws(() => sortedPortfolioSections([section, section]), /unique section identifiers/)
  ;(section.frontmatter!.images as Array<Record<string, string>>)[0].image = "../outside.jpg"
  assert.throws(() => getPortfolioSection(section), /local file/)
  section.frontmatter!.images = []
  section.frontmatter!.section = "unknown"
  assert.throws(() => getPortfolioSection(section), /unknown section/)
})
