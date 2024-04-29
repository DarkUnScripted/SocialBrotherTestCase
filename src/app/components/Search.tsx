'use client';

import { useRouter } from "next/navigation";


type Props = {
    placeholder: string
    category: string
}
 
export default function Search({ placeholder, category }: Props) {
  const router = useRouter()

  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input
        className="py-[10px] px-[18px] h-full w-[972px] rounded-[3px]"
        placeholder={placeholder}
        onKeyDown={(e) => {
          if(e.key == 'Enter'){
            router.push('/blog?search=' + e.target.value + "&topic=" + category)
            router.refresh()
          }
        }}
      />
    </div>
  );
}