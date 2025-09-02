import { useState, useContext, useEffect } from 'react'
import PriceSelect, { option } from './PriceSelect'
import { ProductContext } from '../ProductsProvider'

const PriceFilter = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10000)

  const ctx = useContext(ProductContext)

  const { setPriceRange } = ctx

  useEffect(() => {
    setPriceRange(min, max)
    console.log(min, max)
  }, [min, max])



  const minOptions = (max: number): option[]=>{
    const base = [0,600,1000,1500,2000,2600,4000,7000,10000]
    
    return base.filter(each=>(each<max)
  ).map(each=>({
    label: each === 0? 'min' :`₹${each}`,
    value: each
  }))
  }

  const maxOptions = (min: number): option[]=>{
    const base = [1000,1500,2000,2600,4000,7000,10000]
    
    return base.filter(each=>(each>min)
  ).map(each=>({
    label: each === 0? 'min' :`₹${each}`,
    value: each
  }))
  }
  return (
    <div className='selected-container price-filter-con'>
      <div className='selected-heading-wrap price-heading-wrap'>
        <div className='selected-heading selected-heading-small'>
          <span>price</span>
        </div>
      </div>
      <div className='grey-price-back'>
        <div className='grey-price'></div>
      </div>
      <div>
        <div className='slidebar'>
          <input type='range' min={'min'} max={10000} />
        </div>
        <div className='slider-below'>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className='slider-dot'>.</div>
          <div className=' slider-dot last-dot '>.</div>
        </div>
      </div>
      <div className='min-max-con'>
        <PriceSelect
          label='min'
          id='min'
          value={min}
          onChange={setMin}
          options={minOptions(max)}
        />
        <div className='to-con'>to</div>
        <PriceSelect
          label='max'
          id='max'
          value={max}
          onChange={setMax}
          options={ maxOptions(min)}
        />
      </div>
    </div>
  )
}

export default PriceFilter
