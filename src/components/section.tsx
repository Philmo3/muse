export const TextImageSection = ({image, title, text, textPosition}: {
    image: string, 
    title: string,
    text: string,
    textPosition: 'left' | 'right'
  }
) => {
  return (
    <div className="bg-dark min-h-[30rem] flex items-center pb-4 tablet:pb-0">
      <div className={"flex flex-col items-center gap-4 " + (textPosition  === 'left' ? ' flex tablet:!flex-row' : ' flex tablet:!flex-row-reverse') }>
        <div className="relative w-full">
          <img className="h-60 w-full object-cover object-top tablet:h-[26rem]" src={image}/>
          <div className="absolute tablet:hidden w-full z-10 shadow-[3px_0px_10px_1px_#d9bb6e]"></div>
        </div>
        <div className="text-white p-4 tablet:p-6">
          <h3 className="text-center font-season">{title}</h3>
          <p className="text-center mt-3 font-pt">{text}</p>
        </div>
      </div>
  </div>
  )
}