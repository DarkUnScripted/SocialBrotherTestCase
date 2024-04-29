import { PreprSdk } from "@/server/prepr";
import type { PreprNavigationItemsQuery } from "@/server/prepr/generated/preprAPI.schema";
import Link from "next/link";

export default async function Footer() {
  const { Navigations }: PreprNavigationItemsQuery= await PreprSdk.NavigationItems({
    where: {
      title: "Footer"
    }
  })

  return (
    <div className="w-full h-20 bg-gradient-radial from-[#020365] to-[#01041F] font-serif">
        <div className="flex ml-[165px] h-full items-center gap-x-12 opacity-80">
          {Navigations?.items[0]?.items.map((item) => <Link key={item.title} href={`/${item.link_to_page[0]?._slug}`}><p className="text-xs">{item.title}</p></Link>)}
        </div>
    </div>
  )
}