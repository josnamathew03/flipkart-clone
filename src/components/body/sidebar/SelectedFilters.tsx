import SelectedEach from './SelectedEach'

const SelectedFilters = () => {
  return (
    <div className='selected-container'>
      <div className='selected-heading-wrap'>
        <div className='selected-heading'>
          <span>Filters</span>
        </div>
        <div className='clear-container'>
          <span>Clear all</span>
        </div>
      </div>
      <div className='selected-items'>
        <div className='selected-items-wrap'>
          <SelectedEach cat='3★ & above'/>

          <SelectedEach cat='Bluetooth' />
          <SelectedEach cat='True Wireless' />

          <SelectedEach cat='4★ & above' />
          <SelectedEach cat='4★ & above' />


        </div>
        <div className='show-more'>
            <span>Show More</span>
        </div>
      </div>
    </div>
  )
}

export default SelectedFilters
