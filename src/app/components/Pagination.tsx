import type { ReactNode } from 'react'
import PageItem from './PageItem'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

type Props = {
    pages: number
    currentPage: number
}

function Pagination({ pages, currentPage }:Props) {

  if(pages == 1){
    return (
      <div className="grid grid-cols-5 w-[378px] my-[80px]" />
    )
  }

  if(pages <= 5){
    const pageItems: ReactNode[] = []
    for(let i =0; i<pages; i++){
      pageItems.push(<PageItem key={i} primary={i+1 == currentPage} text={(i+1).toString()} />)
    }
    return(
      <div className="grid grid-cols-5 w-[378px] my-[80px]">
        {pageItems}
      </div>
    )
  }

  const pageItems: ReactNode[] = []
    for(let i =0; i<3; i++){
      pageItems.push(<PageItem key={i} primary={i+1 == currentPage} text={(i+1).toString()} />)
    }

  return (
    <div className="grid grid-cols-7 w-[378px] my-[80px]">
      <ChevronLeftIcon color="#141414" className='opacity-25 h-[50px] mt-[-4px]' />

        {pageItems}

        <PageItem primary={false} text="..." />

        <PageItem primary={false} text={pages.toString()} />

      <ChevronRightIcon color="#141414" className='opacity-25 h-[50px] mt-[-4px]'/>
    </div>
  )
}

export default Pagination