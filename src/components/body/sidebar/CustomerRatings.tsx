import Checkboxes from '../../Checkboxes'
import SidebarSections from './SidebarSections'

const CustomerRatings = () => {
  return (
    <div className='selected-container price-filter-con'>
      <SidebarSections text='Customer Ratings'/>
      <div className='type-selection-con'>
        <div className='clear-all-con'>
          <div className='clear-cross'>✕</div>
          <div className='clear-all'>
            <span>Clear all</span>
          </div>
          <Checkboxes name='ratings' checked={false} label='4★ & above' />
          <Checkboxes name='ratings' checked={false} label='3★ & above' />
          <Checkboxes name='ratings' checked={false} label='2★ & above' />
          <Checkboxes name='ratings' checked={false} label='1★ & above' />
        </div>
      </div>
    </div>
  )
}

export default CustomerRatings
