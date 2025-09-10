import { useContext } from 'react'
import CardRow from './CardRow'
import './MainBody.css'
import Pagination from './Pagination'
import { ProductContext } from '../../../context/products/ProductsProvider'
import { sortActionType } from '../../../context/products/useSort'

const MainBody = () => {
  const {dispatch, sort} = useContext(ProductContext)
  const sortNav: sortActionType[] = ['popularity', 'low-to-high', 'high-to-low']
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
              {sortNav.map(each=> <div className= {sort === each ? 'body-nav-div blue-nav' : 'body-nav-div'}  onClick={()=> dispatch(each)}>{each}</div>)}
              {/* <div className='body-nav-div blue-nav' onClick={()=>dispatch('popular')}>Popularity</div>
              <div className='body-nav-div' onClick={()=> dispatch('lowtohigh')}>Price -- Low to High</div>
              <div className='body-nav-div' onClick={()=> dispatch('hightolow')}>Price -- High to Low</div>
              <div className='body-nav-div'>Newest First</div>
              <div className='body-nav-div'>Discount</div> */}
            </div>
          </div>
        </div>
      </div>
      <CardRow/>
      <Pagination/>
    </div>
  )
}

export default MainBody
