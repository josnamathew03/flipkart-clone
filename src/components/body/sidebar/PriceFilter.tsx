import PriceSelect from './PriceSelect'

const PriceFilter = () => {
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
          options={[
            { label: 'Min', value: 0 },
            { label: '₹600', value: 600 },
            { label: '₹1000', value: 1000 },
            { label: '₹1500', value: 1500 },
            { label: '₹2000', value: 2000 },
            { label: '₹2600', value: 2600 },
            { label: '₹4000', value: 4000 },
            { label: '₹7000', value: 7000 },
            { label: '₹10000', value: 10000 }
          ]}
        />
        <div className='to-con'>to</div>
        <PriceSelect
          label='max'
          id='max'
          options={[
            { label: '₹600', value: 600 },
            { label: '₹1000', value: 1000 },
            { label: '₹1500', value: 1500 },
            { label: '₹2000', value: 2000 },
            { label: '₹2600', value: 2600 },
            { label: '₹4000', value: 4000 },
            { label: '₹7000', value: 7000 },
            { label: '₹10000', value: 10000 },
            { label: '+₹10000', value: 10000 }
          ]}
        />
      </div>
    </div>
  )
}

export default PriceFilter
