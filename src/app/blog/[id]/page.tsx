import BlogItem from "@/app/components/Blog"
import { PreprSdk } from "@/server/prepr"
import Link from "next/link"

export default async function Blog({params}) {
  const { Blog }:PreprBlogsQuery = await PreprSdk.BlogContent({
    slug: params.id,
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { Blogs }:PreprBlogsQuery = await PreprSdk.BlogPreview({
    limit: 3,
    sort: "publish_on_DESC",
    where: {
      _slug_nany: [params.id]
    }
  })

  return (
    <main className="flex min-h-screen flex-col text-slate-900">

      {/* <div className="bg-slate-900 bg-cover bg-[center_-250px] h-[300px] w-full flex items-center justify-center text-white" style={{backgroundImage: `url(${Page?.page_header?.image.url})`}}>
        <div className="w-[823px] flex flex-col items-center justify-center text-center gap-y-[32px] z-10">
          <h1 className="text-[72px] font-bold uppercase">{Page?.page_header?.title}</h1>

          <p className="font-bold text-[18px]">{Page?.page_header?.text}</p>
        </div>
      </div> */}

      <div className="bg-slate-900 bg-cover bg-[center_-250px] h-[452px] w-full flex items-center justify-center text-white" style={{backgroundImage: `url(${Blog.banner_image.url})`}} />

      <div className="w-[823px] ml-[166px] mt-[62px]">
        <div className="bg-[#EFEFF8] h-8 w-24 items-center justify-center flex rounded uppercase font-bold text-xs">
            <p>{Blog.categories[0].body}</p>
        </div>

        <div className="text-5xl font-bold mb-[32px] mt-[8px]">
          <h2>{Blog.title}</h2>
        </div>

        {Blog.content.map((contentItem, index) => <div key={index} dangerouslySetInnerHTML={{__html: contentItem.html}} className={`${contentItem.format && "my-[24px] font-bold"} ${contentItem.format == "H2" && "text-5xl"} ${contentItem.format == "H3" && "text-4xl"} ${contentItem.format == "H4" && "text-xl"} ${contentItem.format == "H5" && "text-lg"}`}></div>)}
      </div>

      <div className="text-slate-900 mt-[80px] bg-[#EFEFF8] flex flex-col justify-center items-center py-[64px]">
        <div>
          <h2 className="font-bold text-5xl mb-8">Gerelateerde blogs</h2>

          <div className="flex gap-x-8">
            {Blogs.items.map((blog) => <Link href={`/blog/${blog._slug}`} key={blog._slug}><BlogItem title={blog.title} category={blog.categories[0]?.body} image={blog.banner_image.url} text={blog.content[0].text}  /></Link>)}
          </div>
        </div>
      </div>
    </main>
  )
}