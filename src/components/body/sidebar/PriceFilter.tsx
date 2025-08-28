const PriceFilter = () => {
  return (
    <div className='selected-container price-filter-con'>
      <div className='selected-heading-wrap '>
        <div className='selected-heading selected-heading-small'>
          <span>price</span>
        </div>
      </div>
      <div className='grey-price-back'>
        <div className='grey-price'></div>
      </div>
      <div>
        <div className='slidebar'>
          <input type='range' />
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
        <div className='min-con'>
          <select name='minimum' id='min'>
            <option value='Min'>Min</option>
            <option value='Min'>₹600</option>
            <option value='Min'>₹1000</option>
          </select>
        </div>
        <div className="to-con">to</div>
        <div className='max-con'>
          <select name='maximum' id='max'>
            <option value='max'>₹10000+</option>
            <option value='Min'>₹600</option>
            <option value='Min'>₹1000</option>
          </select>
        </div>
      </div> 
    </div>
  )
}

export default PriceFilter
