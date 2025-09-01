import Assured from './Assured'
import Availability from './Availability'
import Brand from './Brand'
import Categories from './Categories'
import Color from './Color'
import Compatible from './Compatible'
import Connectivity from './Connectivity'
import CustomerRatings from './CustomerRatings'
import Discount from './Discount'
import Features from './Features'
import GetInvoice from './GetInvoice'
import HeadphoneDesign from './HeadphoneDesign'
import HeadphoneType from './HeadphoneType'
import NewArrivals from './NewArrivals'
import Offers from './Offers'
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
            <Connectivity/>
            <CustomerRatings/>
            <Brand/>
            <Discount/>
            <Features/>
            <HeadphoneDesign/>
            <Color/>
            <Offers/>
            <Availability/>
            <GetInvoice/>
            <NewArrivals/>
            <Compatible/>
        </div>
        <div className='need-help-container'>
          <div className='need-help-wrap'>
            <span>Need help?</span>
          </div>
          <div className='help-con'>
            <span>Help me decide</span>
            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" ></path></svg>
          </div>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/buying-guide-illustration_4dd325.png" alt="" />
        </div>
      
    </div>
  )
}

export default Sidebar
