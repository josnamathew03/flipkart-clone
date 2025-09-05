import './Body.css'
import MainBody from './mainbody/MainBody'
import ProductsProvider from '../../context/products/ProductsProvider'
import Sidebar from './sidebar/Sidebar'

const Body = () => {
  return (
    <ProductsProvider>
      <div className='body-container'>
        <div className='body'>
          <Sidebar />
          <MainBody />
        </div>
      </div>
    </ProductsProvider>
  )
}

export default Body
