import { useContext } from 'react'
import { WishlistContext } from '../../context/wishlist/WishlistProvider'
import WishlistCard from './WishlistCard'
import '../body/mainbody/MainBody.css'
import './Wishlist.css'
import Header from '../header/Header'

const Wishlist = () => {
  const { wishlist, dispatch } = useContext(WishlistContext)
  return (
    <>
      <Header />
      <div className='wish-page'>
        <div className='profile-details'></div>
        <div className='wishlist-container'>
          <div className='wish-head'>
            <h4>MyWishlist({wishlist.length})</h4>
            <span onClick={()=>dispatch({type:'clearAll'})}>Clear all</span>
          </div>
          {wishlist.map(each => (
            <WishlistCard
              key={each.id}
              id={each.id}
              image={each.image}
              name={each.name}
              price={each.price}
              original={each.original}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Wishlist
