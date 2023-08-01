export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Tiger's Blog",
  description:
    "mark down what's my mind",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Catolog",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/tigershinny",
    docs: "https://ui.shadcn.com",
  },
}
