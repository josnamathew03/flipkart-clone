type Footer2ListProps={
    head: string,
    items: string[]
}
const Footer2List = ({head,items}: Footer2ListProps) => {
  return (
        <div className='footer2'>
          <div className='footer2-head'>{head}</div>
         {items.map((item,i)=>( <a href="/" key={i}>{item}</a>))}
         
        </div>
    
  )
}

export default Footer2List
