import Checkboxes from '../../Checkboxes'
import SidebarSections from './SidebarSections'

const HeadphoneType = () => {
  return (
    <div className='price-filter-con '>
      <SidebarSections text='Headphone Type' />
      <div className='type-selection-con'>
        <div className='clear-all-con'>
          <div className='clear-cross'>✕</div>
          <div className='clear-all'>
            <span>Clear all</span>
          </div>
        </div>
        <Checkboxes
          name='headphone-type'
          checked={false}
          label='True Wireless'
          value={'wireless'}
        />
        <Checkboxes name='headphone-type' value={'inear'} checked={false} label='In the Ear' />
        <Checkboxes name='headphone-type' value={'onear'} checked={false} label='On the Ear' />
      </div>
    </div>
  )
}

export default HeadphoneType
