'use client';

import { useRouter } from "next/navigation";

type Props = {
  primary: boolean
  text: string
  search: string
  topic: string
}

export default function Filter({primary, text, search, topic}: Props) {
  const router = useRouter()

  if(primary){
    return (
      <div className="px-[16px] py-[8px] bg-primary h-[32px] w-min rounded-[4px] text-center uppercase text-xs text-white font-bold whitespace-nowrap cursor-pointer">
        <p>{text}</p>
      </div>
    )
  }
  return (
    <div 
      className="px-[14px] py-[8px] h-[32px] w-min border-2 border-light-grey rounded-[4px] uppercase text-xs font-bold whitespace-nowrap cursor-pointer"
      onClick={()=> {
        console.log('clicked')
        router.push('/blog?search=' + search + "&topic=" + topic)
        router.refresh()
      }}
    >
      <p>{text}</p>
    </div>
  )
}