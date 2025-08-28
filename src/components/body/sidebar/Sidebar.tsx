import Assured from './Assured'
import Categories from './Categories'
import HeadphoneType from './HeadphoneType'
import PriceFilter from './PriceFilter'
import SelectedFilters from './SelectedFilters'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='filter-container'>
            <SelectedFilters/>
            <Categories/>
            <PriceFilter/>
            <Assured/>
            <HeadphoneType/>
        </div>
        <div className='need-help-container'>

        </div>
      
    </div>
  )
}

export default Sidebar
