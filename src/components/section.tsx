


export const TextImageSection = ({image, text, textPosition}: {
    image: string, 
    text: string,
    textPosition: 'left' | 'right'
  }
) => {
  return (
    <div className={"flex flex-col justify-between items-center p-4 gap-4" + (textPosition  === 'left' ? ' flex tablet:!flex-row' : ' flex tablet:!flex-row-reverse') }>
      <img className="h-60 w-60" src={image}/>
      <p className="text-center">{text}</p>
    </div>
  )
}