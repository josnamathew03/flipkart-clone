import { useContext, useState } from 'react'
import Checkboxes from '../../Checkboxes'
import SidebarSections from './SidebarSections'
import { ProductContext } from '../ProductsProvider'

const CustomerRatings = () => {
  const ctx = useContext(ProductContext)
  const {setRatings} = ctx
  const [checked,setChecked] = useState<number[]>([])

  const handleChange = (value:number)=>{
   setChecked(prev=>
    prev.includes(value)?
     prev.filter(f=>(f != value))
     : [...prev, value]
   )
   setRatings(value)

  }
  return (
    <div className='selected-container price-filter-con'>
      <SidebarSections text='Customer Ratings' />
      <div className='type-selection-con'>
        <div className='clear-all-con'>
          <div className='clear-cross'>✕</div>
          <div className='clear-all'>
            <span>Clear all</span>
          </div>
        </div>
        

        <Checkboxes name='ratings' checked={checked.includes(4)} value={4} label='4★ & above' handleChange={(e)=>handleChange(Number(e.target.value))}/>
        <Checkboxes name='ratings' checked={checked.includes(3)} value={3} label='3★ & above' handleChange={(e)=>handleChange(Number(e.target.value))}/>
        <Checkboxes name='ratings' checked={checked.includes(2)} value={2} label='2★ & above' handleChange={(e)=>handleChange(Number(e.target.value))}/>
        <Checkboxes name='ratings' checked={checked.includes(1)} value={1} label='1★ & above' handleChange={(e)=>handleChange(Number(e.target.value))}/>
      </div>
    </div>
  )
}

export default CustomerRatings
