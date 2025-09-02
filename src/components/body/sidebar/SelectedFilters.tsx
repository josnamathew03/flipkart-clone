import { useContext, useState } from 'react'
import SelectedEach from './SelectedEach'
import { ProductContext } from '../ProductsProvider'

const SelectedFilters = () => {
  const ctx = useContext(ProductContext)
  const {selectedFilters, clearFilters, removeFilter} = ctx

  return (
    <div className='selected-container'>
      <div className='selected-heading-wrap'>
        <div className='selected-heading'>
          <span>Filters</span>
        </div>
        <div className='clear-container' onClick={clearFilters}>
          <span >Clear all</span>
        </div>
      </div>
      <div className='selected-items'>
        <div className='selected-items-wrap'>
          {/* <SelectedEach cat='3★ & above'/>

          <SelectedEach cat='Bluetooth' />
          <SelectedEach cat='True Wireless' />

          <SelectedEach cat='4★ & above' />
          <SelectedEach cat='4★ & above' /> */}
          {
            selectedFilters.map(filter=>(<SelectedEach cat={filter} remove={()=>removeFilter(filter)}/>))
          }


        </div>
        <div className='show-more'>
            <span>Show More</span>
        </div>
      </div>
    </div>
  )
}

export default SelectedFilters
