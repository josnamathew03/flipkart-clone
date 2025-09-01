import Checkboxes from '../../Checkboxes'
import SidebarSections from './SidebarSections'

const CustomerRatings = () => {
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

        <Checkboxes name='ratings' checked={true} label='4★ & above' />
        <Checkboxes name='ratings' checked={true} label='3★ & above' />
        <Checkboxes name='ratings' checked={false} label='2★ & above' />
        <Checkboxes name='ratings' checked={false} label='1★ & above' />
      </div>
    </div>
  )
}

export default CustomerRatings
