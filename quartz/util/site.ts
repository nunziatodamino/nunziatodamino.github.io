import { QuartzPluginData } from "../plugins/vfile"
import { FilePath, FullSlug, slugifyFilePath } from "./path"

export function siteSection(slug: string = ""): "home" | "painter" | "physicist" {
  if (slug === "index") return "home"
  if (slug === "painter" || slug.startsWith("painter/")) return "painter"
  return "physicist"
}

export function isPhysicsPage(file: QuartzPluginData): boolean {
  return siteSection(file.slug) === "physicist"
}

export function isExhibitionPage(file: QuartzPluginData): boolean {
  return file.slug?.startsWith("painter/exhibitions/") ?? false
}

export interface Exhibition {
  slug: FullSlug
  title: string
  year: number
  dates: string
  venue: string
  location: string
  poster?: string
  posterSource?: string
  posterOriginal?: string
  posterOriginalSource?: string
  role?: string
  artworks: FullSlug[]
}

export function getExhibition(file: QuartzPluginData): Exhibition | undefined {
  if (!isExhibitionPage(file) || file.slug === "painter/exhibitions/index") return
  const data: Record<string, unknown> = file.frontmatter ?? {}
  const required = (key: string): string => {
    const value = data[key]
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error(`Exhibition ${file.slug}: missing ${key} in frontmatter`)
    }
    return value
  }
  const hasPoster = data.poster != null || data.posterOriginal != null || data.posterPdf != null
  const posterSource = hasPoster ? required("poster") : undefined
  const posterOriginalSource = hasPoster
    ? required(data.posterOriginal == null ? "posterPdf" : "posterOriginal")
    : undefined
  if (
    (posterSource && !/^painter\/images\/.+\.(webp|jpe?g|png|avif)$/i.test(posterSource)) ||
    (posterOriginalSource &&
      !/^painter\/images\/.+\.(pdf|webp|jpe?g|png|avif)$/i.test(posterOriginalSource)) ||
    [posterSource, posterOriginalSource].some((source) => source?.split("/").includes(".."))
  ) {
    throw new Error(
      `Exhibition ${file.slug}: poster and posterOriginal must be local files in painter/images/`,
    )
  }
  if (typeof data.year !== "number" || !Number.isInteger(data.year)) {
    throw new Error(`Exhibition ${file.slug}: year must be a number`)
  }
  if (!Array.isArray(data.artworks) || !data.artworks.every((slug) => typeof slug === "string")) {
    throw new Error(`Exhibition ${file.slug}: artworks must be a list of painting slugs`)
  }
  if (new Set(data.artworks).size !== data.artworks.length) {
    throw new Error(`Exhibition ${file.slug}: duplicate painting in artworks`)
  }
  return {
    slug: file.slug!,
    title: required("title"),
    year: data.year,
    dates: required("dates"),
    venue: required("venue"),
    location: required("location"),
    poster: posterSource ? slugifyFilePath(posterSource as FilePath) : undefined,
    posterSource,
    posterOriginal: posterOriginalSource
      ? slugifyFilePath(posterOriginalSource as FilePath)
      : undefined,
    posterOriginalSource,
    role: data.role == null ? undefined : required("role"),
    artworks: data.artworks as FullSlug[],
  }
}

export function sortedExhibitions(files: QuartzPluginData[]): Exhibition[] {
  return files
    .map(getExhibition)
    .filter((exhibition): exhibition is Exhibition => exhibition !== undefined)
    .sort((a, b) => b.year - a.year || a.slug.localeCompare(b.slug))
}

export function exhibitionArtworks(exhibition: Exhibition, files: QuartzPluginData[]): Artwork[] {
  const works = new Map(sortedArtworks(files).map((work) => [work.slug, work]))
  return exhibition.artworks.map((slug) => {
    const work = works.get(slug)
    if (!work) {
      throw new Error(`Exhibition ${exhibition.slug}: painting ${slug} is missing or unpublished`)
    }
    return work
  })
}

export interface Artwork {
  slug: FullSlug
  title: string
  image: string
  imageSource: string
  alt: string
  year?: string
  medium: string
  dimensions?: string
  order: number
}

// Image paths are relative to content/, just like the documented portfolio template.
export function getArtwork(file: QuartzPluginData): Artwork | undefined {
  if (
    siteSection(file.slug) !== "painter" ||
    file.slug === "painter/index" ||
    isExhibitionPage(file)
  )
    return
  const frontmatter: Record<string, unknown> = file.frontmatter ?? {}
  const required = (field: string): string => {
    const value = frontmatter[field]
    if ((typeof value !== "string" && typeof value !== "number") || String(value).trim() === "") {
      throw new Error(`Painting ${file.slug}: missing ${field} in frontmatter`)
    }
    return String(value)
  }
  const imageSource = required("image")
  if (
    !/^painter\/images\/.+\.(webp|jpe?g|png|avif)$/i.test(imageSource) ||
    imageSource.split("/").includes("..")
  ) {
    throw new Error(`Painting ${file.slug}: image must be a local file in painter/images/`)
  }
  const order = frontmatter.order
  if (typeof order !== "number" || !Number.isFinite(order)) {
    throw new Error(`Painting ${file.slug}: order must be a number`)
  }
  return {
    slug: file.slug!,
    title: required("title"),
    image: slugifyFilePath(imageSource as FilePath),
    imageSource,
    alt: required("alt"),
    year: frontmatter.year == null ? undefined : required("year"),
    medium: required("medium"),
    dimensions: frontmatter.dimensions == null ? undefined : required("dimensions"),
    order,
  }
}

export function sortedArtworks(files: QuartzPluginData[]): Artwork[] {
  return files
    .map(getArtwork)
    .filter((work): work is Artwork => work !== undefined)
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug))
}
