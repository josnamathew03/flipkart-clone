import CardRow from './CardRow'
import './MainBody.css'

const MainBody = () => {
  return (
    <div className='mainBody'>
      <div className='des-con'>
        <div className='des-wrap'>
          <div className='des'>
            <div className='pages-des'>
              <div>
                <a href='/'>Home</a>

                <svg
                  width='16'
                  height='27'
                  viewBox='0 0 16 27'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z'></path>
                </svg>
              </div>
              <div>
                <a href='/'>Audio & Video</a>

                <svg
                  width='16'
                  height='27'
                  viewBox='0 0 16 27'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z'></path>
                </svg>
              </div>
              <div>
                <a href='/'>Headset</a>
              </div>
            </div>
            <div className='des-para-con'>
              <div className='des-para'>
                  <p>Check out the Exclusive Launches of <a href="/">Samsung Galaxy Buds Pro</a> active noise cancellation enable bluetooth headset with different colors will be available from 28th Jan 2021.</p>
                  <p><br></br></p>
                  <p className='p-last'>Also check: <a href="/">Skullcandy Wireless, Skullcandy Smokin Buds 2, JBL Headset, Jabra Headphones, Samsung Level U, Sony Extra Base Headphones</a></p>
              </div>
            </div>
            <h1>Headset</h1>
            <span className='count-span'>(Showing 1 – 40 products of 1,720 products)</span>
            <div className='body-nav'>
              <span>Sort By</span>
              <div className='body-nav-div blue-nav'>Popularity</div>
              <div className='body-nav-div'>Price -- Low to High</div>
              <div className='body-nav-div'>Price -- High to Low</div>
              <div className='body-nav-div'>Newest First</div>
              <div className='body-nav-div'>Discount</div>
            </div>
          </div>
        </div>
      </div>
      <CardRow/>
    </div>
  )
}

export default MainBody
