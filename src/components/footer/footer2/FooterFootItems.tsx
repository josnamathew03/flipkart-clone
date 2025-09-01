type FooterFootItemsProps ={
    image: string
    text: string
}

const FooterFootItems = ({image,text}: FooterFootItemsProps) => {
  return (
    <div>
      <img src={image} alt="" />
      <span>{text}</span>
    </div>
  )
}

export default FooterFootItems
