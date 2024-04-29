type Props = {
  primary: boolean
  text: string
}

function PageItem({primary, text}: Props) {
  if(primary){
    return (
      <div className="bg-primary size-10 text-center content-center text-white font-bold rounded-[4px]">
        {text}
      </div>
    )
  }

  return (
    <div className="border-2 border-light-grey size-10 text-center content-center font-bold rounded-[4px]">
      {text}
    </div>
  )
}

export default PageItem