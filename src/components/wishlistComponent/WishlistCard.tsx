
import {  wishlistType } from '../../context/wishlist/WishlistProvider'

const WishlistCard = ({
  id,
  image,
  name,

  price,
  original,

}: wishlistType) => {
  const dis = Math.floor(((original - price) / original) * 100)

  return (
    <div className='card-container'>
      <div className='card-wrap'>
        <a href='/' className='image-anchor'>
          <div className='image-con'>
            <img src={image} alt='' />
          </div>
        </a>

        <a href='/' className='card-name'>
          {name}
        </a>

        <a href='/' className='card-price-con'>
          <div className='price-now'>₹{price}</div>
          <div className='ori-price'>₹{original}</div>
          <div className='off-div'>
            <span>{dis}% off</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default WishlistCard

