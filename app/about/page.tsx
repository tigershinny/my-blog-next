import getNavLinks from "../links"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const revalidate = 24 * 60 * 60;

export default async function IndexPage() {
  const navResources = await getNavLinks();
  const navItems = navResources.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  }) ?? [{
    id: 1,
    title: 'unknown',
    icon: 'ccc',
  }]
  return <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex">
        <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">

        </div>
        <div className="sm:pl-[16rem]">
          {/* @ts-expect-error Server Component */}
          <SiteHeader navItems={navItems} />
          this is about me
          <SiteFooter />
        </div>
      </div>
    </div>
}
