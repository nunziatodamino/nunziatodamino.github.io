import { FullPageLayout, PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import SiteNavigation from "./quartz/components/SiteNavigation"
import PersonalPage from "./quartz/components/pages/PersonalPage"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [SiteNavigation(), Component.Darkmode()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/nunziatodamino",
    },
  }),
}

export const personalPageLayout: FullPageLayout = {
  ...sharedPageComponents,
  beforeBody: [],
  left: [],
  right: [],
  pageBody: PersonalPage(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
