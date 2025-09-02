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

  let minOption: option[]

  if (max === 1000) {
    minOption = [
      { label: 'Min', value: 0 },
      { label: '₹600', value: 600 }
    ]
  } else if (max === 1500) {
    minOption = [
      { label: 'Min', value: 0 },
      { label: '₹600', value: 600 },
      { label: '₹1000', value: 1000 }
    ]
  }
  else if (max === 2000) {
    minOption = [
      { label: 'Min', value: 0 },
      { label: '₹600', value: 600 },
      { label: '₹1000', value: 1000 },
      { label: '₹1500', value: 1500 }

    ]
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
          options={minOption}
        />
        <div className='to-con'>to</div>
        <PriceSelect
          label='max'
          id='max'
          value={max}
          onChange={setMax}
          options={
            min === 1000
              ? [
                  { label: '₹1500', value: 1500 },
                  { label: '₹2000', value: 2000 },
                  { label: '₹2600', value: 2600 },
                  { label: '₹4000', value: 4000 },
                  { label: '₹7000', value: 7000 },
                  { label: '₹10000', value: 10000 },
                  { label: '+₹10000', value: 10000 }
                ]
              : [
                  { label: '₹1000', value: 1000 },
                  { label: '₹1500', value: 1500 },
                  { label: '₹2000', value: 2000 },
                  { label: '₹2600', value: 2600 },
                  { label: '₹4000', value: 4000 },
                  { label: '₹7000', value: 7000 },
                  { label: '₹10000', value: 10000 },
                  { label: '+₹10000', value: 10000 }
                ]
          }
        />
      </div>
    </div>
  )
}

export default PriceFilter
