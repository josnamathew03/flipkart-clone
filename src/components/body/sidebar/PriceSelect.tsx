type option ={
    label: string
    value: number
}
type PriceSelectType ={
    id: string
    label: string
    options : option[]
}

const PriceSelect = ({id,label,options}: PriceSelectType) => {
  return (
     <div className='min-con'>
          <select name={label} id={id}>
            {options.map((opt,i)=>(<option value={opt.value} key={i}>{opt.label}</option>))}
          </select>
        </div>
  )
}

export default PriceSelect
