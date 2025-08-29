import SidebarSections from './SidebarSections'
import Checkboxes from '../../Checkboxes'

const Offers = () => {
  return (
    <div>
      <div className='selected-container price-filter-con'>
        <SidebarSections text='offers' />
        <div className='checkboxes-div'>
          <Checkboxes name='offers' checked={false} label='Special Price' />
          <Checkboxes
            name='offers'
            checked={false}
            label='Buy More, Save More'
          />
        </div>
      </div>
    </div>
  )
}

export default Offers
