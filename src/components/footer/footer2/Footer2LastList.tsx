type Footer2LastListProps ={
  
    items: string[]
}
const Footer2LastList = ({items}: Footer2LastListProps) => {
  return (
    <div className="footer2-last-list">
      <div className="footer2-last-list-con">
        <div className="footer2-last-list-wrap">
            {items.map((item,i)=>{
              if(item==='Telephone:'){
              return<p className="telephone-wrap" key={i}>{item} <a href="/"> 044-45614700</a> / <a href="/">044-67415800</a></p>

              }
              return<p key={i}>{item}</p>
              })}
        </div>
      </div>
    </div>
  )
}

export default Footer2LastList
