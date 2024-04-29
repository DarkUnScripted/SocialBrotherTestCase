import { PreprSdk } from '@/server/prepr';
import type { PreprNavigationItemsQuery } from '@/server/prepr/generated/preprAPI.schema';
import Link from 'next/link';
import Image from "next/image"

export default async function MenuBar() {
  const { Navigations }: PreprNavigationItemsQuery = await PreprSdk.NavigationItems({
    where: {
      title: "Header"
    }
  })

  return (
    <div className="w-full h-20 bg-gradient-radial from-[#020365] to-[#01041F] flex justify-between items-center px-40">
        <Link href={'/'}><Image src={'/Primary_logo_white.svg'} alt="logo" width={210} height={32}></Image></Link>

        <div className="flex font-bold gap-x-7">
          {Navigations?.items[0]?.items.map((item) => <Link href={`/${item.link_to_page[0]?._slug}`} key={item.title}><p>{item.title}</p></Link>)}
        </div>
    </div>
  )
}