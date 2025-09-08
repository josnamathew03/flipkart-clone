import {  Routes, Route } from 'react-router-dom'
import App from '../App'
import Wishlist from '../components/wishlistComponent/Wishlist'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
        <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  )
}

export default Router
