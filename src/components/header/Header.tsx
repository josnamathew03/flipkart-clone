import './Header.css'
import SpanNav from './SpanNav'
import HeaderRest from './header-rest/HeaderRest'

const Header = () => {
  return (
    <>
      <div className='header-wrap'>
        <div className='header'>
          <div className='space'></div>
          <HeaderRest />
          <div className='space'></div>
        </div>
      </div>
      <div className='header-nav-container'>
        <div className='header-nav'>
          <SpanNav text='Electronics'/>
          <SpanNav text='TVs & Appliances'/>
          <SpanNav text='Men'/>
          <SpanNav text='Women'/>
          <SpanNav text='Baby & Kids'/>
          <SpanNav text='Home & Furniture'/>
          <SpanNav text='Sports, Books & More'/>
          <a href="/" className='nav-span'>Flights</a>
          <a href="/" className='nav-span'>Offer Zone</a>


        </div>
      </div>
    </>
  )
}

export default Header
