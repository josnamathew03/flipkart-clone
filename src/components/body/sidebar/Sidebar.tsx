import Categories from './Categories'
import SelectedFilters from './SelectedFilters'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='filter-container'>
            <SelectedFilters/>
            <Categories/>
        </div>
        <div className='need-help-container'>

        </div>
      
    </div>
  )
}

export default Sidebar
