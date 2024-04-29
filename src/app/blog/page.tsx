import { PreprSdk } from "@/server/prepr"
import type { PreprPageQuery } from "@/server/prepr/generated/preprAPI.schema"
import Filter from "../components/Filter";
import BlogItem from "../components/Blog";
import Link from "next/link";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

export default async function Blogs({searchParams}) {
  const { Page }:PreprPageQuery = await PreprSdk.Page({
    slug: "blog"
  })

  const { Blogs }:PreprBlogsQuery = await PreprSdk.BlogPreview({
    limit: 9,
    sort: "publish_on_DESC",
    where: {
      "categories_any": searchParams.topic != (undefined || "") ? searchParams.topic : null,
      "title_contains": searchParams.search ?? null
    }
  })

  return (
    <main className="flex min-h-screen flex-col text-slate-900">
      <div className="bg-slate-900 bg-cover bg-[center_-250px] h-[300px] w-full text-white" style={{backgroundImage: `url(${Page?.page_header?.image.url})`}}>
        <div className='bg-black/50 size-full flex items-center justify-center'>
          <div className="w-[823px] flex flex-col items-center justify-center text-center gap-y-[32px] z-10">
            <h1 className="text-[72px] font-bold uppercase">{Page?.page_header?.title}</h1>

            <p className="font-bold text-[18px]">{Page?.page_header?.text}</p>
          </div>
        </div>
      </div>

      <div className="h-[152px] w-full bg-[#EFEFF8] flex items-center justify-center">
        <div className="flex flex-col gap-y-[16px]">
          <p className="font-bold text-lg">Search for blogs</p>

          <div className="h-[48px] flex gap-x-[24px]">
            {/* <input className="py-[10px] px-[18px] h-full w-[972px] rounded-[3px]" placeholder="Search"/> */}
            <Search placeholder={"Search"} category={searchParams.topic}/>

            <button className="bg-primary text-white h-full w-[112px] rounded-[3px]">Search</button>
          </div>
        </div>
      </div>

      <div className="w-fit self-center">
        <div className="my-[32px]">
          <p className="text-lg font-bold mb-[16px]">Topics</p>

          <div className="flex gap-x-[8px]">
            <Filter 
              primary={searchParams.topic == (undefined || "")} 
              text="All Blogs" 
              search={searchParams.search}
              topic={""}
            />

            <Filter 
              primary={searchParams.topic == "Interview"} 
              text="Interview" 
              search={searchParams.search}
              topic={"Interview"}
            />

            <Filter 
              primary={searchParams.topic == "Blog"} 
              text="Blog" 
              search={searchParams.search}
              topic={"Blog"}
            />

            <Filter 
              primary={searchParams.topic == "Whitepaper"} 
              text="Whitepaper" 
              search={searchParams.search}
              topic={"Whitepaper"}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-[32px] gap-y-[80px]">
          {Blogs.items.map((blog) => <Link href={`/blog/${blog._slug}`} key={blog._slug}><BlogItem title={blog.title} category={blog.categories[0]?.body} image={blog.banner_image.url} text={blog.content[0].text} /></Link>)}
        </div>

        <div className="w-full flex justify-center">
          <Pagination pages={Math.ceil(Blogs.total / 9)} currentPage={1} />
        </div>
      </div>
    </main>
  );
}