import { useContext } from 'react'
import { WishlistContext, wishlistType } from '../../context/wishlist/WishlistProvider'

const WishlistCard = ({
  id,
  image,
  name,

  price,
  original
}: wishlistType) => {
  const dis = Math.floor(((original - price) / original) * 100)
  const {dispatch} = useContext(WishlistContext)

  return (
    <div className='card-wish-container'>
      <div className='card-wrap card-wrap-wish'>
        <a href='/' className='image-anchor'>
          <div className='image-con image-con-wish'>
            <img src={image} alt='' />
          </div>
        </a>
        <div className='card-content-wish'>
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
        <div className='delete-con' onClick={()=>dispatch({type: 'removeItem', id})}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLjUuNWgxNXYxNWgtMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0MyQzJDMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMSAxMy44MzNjMCAuOTE3Ljc1IDEuNjY3IDEuNjY3IDEuNjY3aDYuNjY2Yy45MTcgMCAxLjY2Ny0uNzUgMS42NjctMS42Njd2LTEwSDF2MTB6bTEwLjgzMy0xMi41SDguOTE3TDguMDgzLjVIMy45MTdsLS44MzQuODMzSC4xNjdWM2gxMS42NjZWMS4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="" />
        </div>
      </div>
    </div>
  )
}

export default WishlistCard
