import { ArrowRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

type Props = {
  image: string
  category: string
  title: string
  text: string
}

function BlogItem({image, category, title, text}: Props) {
  return (
    <div className="w-[348px]">
        <Image src={image} alt="blogphoto" width={348} height={240} className="rounded-md" objectFit="cover" style={{height: 240}}/>

        <div className="bg-[#EFEFF8] h-8 w-24 items-center justify-center flex rounded uppercase font-bold text-xs absolute my-[-40px] mx-[8px]">
            <p>{category}</p>
        </div>

        <h3 className="font-bold text-xl mt-6 mb-3.5">{title}</h3>

        <p>{text}</p>

        <div className="flex mt-4 gap-x-[12px]">
          <p className="font-bold">Lees meer </p>

          <ArrowRightIcon className="size-[18px] mt-[2px] font-bold" /> 
        </div>
    </div>
  )
}

export default BlogItem