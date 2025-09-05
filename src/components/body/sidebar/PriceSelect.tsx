import { useContext } from 'react'
import { ProductContext } from '../../../context/products/ProductsProvider'

export type option = {
  label: string
  value: number
}
type PriceSelectType = {
  id: string
  label: string
  value: number
  onChange: (val: number) => void
  options: option[]
}

const PriceSelect = ({
  id,
  label,
  value,
  onChange,
  options
}: PriceSelectType) => {
  const handleChnage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVal = Number(e.target.value)
    onChange(newVal)
  }

  return (
    <div className='min-con'>
      <select name={label} id={id} onChange={handleChnage} value={value}>
        {options.map((opt, i) => {
        
          return (
            <option value={opt.value} key={i}>
              {opt.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default PriceSelect
