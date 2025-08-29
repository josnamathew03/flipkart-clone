import SidebarSections from './SidebarSections'
import Checkboxes from '../../Checkboxes'

const Brand = () => {
  return (
    <div className='selected-container price-filter-con'>
      <SidebarSections text='brand' />
      <div className='checkboxes-div'>
        <div className='search-brand-con'>
          <svg width="20" height="20" viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg"><g  fill-rule="evenodd"><path  d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path  d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
          <input type="text" placeholder='Search Brand'/>
        </div>
        <Checkboxes name='brand' checked={false} label='boAt' />
        <Checkboxes name='brand' checked={false} label='OnePlus' />
        <Checkboxes name='brand' checked={false} label='realme' />
        <Checkboxes name='brand' checked={false} label='SONY' />
        <Checkboxes name='brand' checked={false} label='CMF by Nothing' />
        <Checkboxes name='brand' checked={false} label='JBL' />
      </div>
      <div className='more-brand-con'>
        <span>252 MORE</span>
      </div>
    </div>
  )
}

export default Brand
