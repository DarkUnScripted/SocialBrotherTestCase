// import Image from 'next/image';

import { PreprSdk } from '@/server/prepr';
import type { PreprBlogsQuery, PreprPageQuery } from '@/server/prepr/generated/preprAPI.schema';
import Link from 'next/link';
import BlogItem from './components/Blog';

export default async function Home() {
  const { Page }:PreprPageQuery = await PreprSdk.Page({
    slug: "/"
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { Blogs }:PreprBlogsQuery = await PreprSdk.BlogPreview({
    limit: 3,
    sort: "publish_on_DESC"
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-slate-900 bg-cover bg-center h-[601px] w-full" style={{backgroundImage: `url(${Page?.page_header?.image.url})`}}>
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        <div className='bg-black/50 size-full flex items-center justify-center'>
          <div className="w-[823px] flex flex-col items-center justify-center text-center gap-y-[32px] z-10">
            <h1 className="text-[72px] font-bold uppercase">{Page?.page_header?.title}</h1>

            <p className="font-bold text-[18px]">{Page?.page_header?.text}</p>
          </div>
        </div>
      </div>

      <div className="text-slate-900 my-20">
        <h2 className="font-bold text-5xl mb-8">De nieuwste blogs</h2>

        <div className="flex gap-x-8">
          {Blogs.items.map((blog) => <Link href={`/blog/${blog._slug}`} key={blog._slug}><BlogItem title={blog.title} category={blog.categories[0]?.body} image={blog.banner_image.url} text={blog.content[0].text}  /></Link>)}
        </div>

        {/* {Blogs?.items.map((blog) => <Link key={blog._slug} href={blog._slug}><BlogItem title={blog.title} category={blog.categories[0]?.body} image={blog.banner_image.url} /></Link>)} */}
      </div>
    </main>
  );
}
