import { productType } from "../../types/productType"



const CardM = ({
  id,
  image,
  sponsored,
  name,
  brand,
  stars,
  flipAssured,
  price,
  original,
  bankOffer,
  left


}: productType) => {
    const dis = Math.floor(((original-price) / original) * 100)

  return (
    <div className='card-m'>
      <div className='card-m-wrap'>
        <div className='image-con-m'>
          <div className='image-wrap-m'>
            <img
              src={image}
              alt=''
            />
          </div>
        </div>
        <div className='card-des-m'>
          <div className='brand-wrap-m'>
            <a href='/'>{brand}</a>
          </div>
          <a href='/' className='card-name-anchor'>
            <div className='card-name-m'>
              {name}
            </div>
          </a>
          <div className='price-con-m'>
            <div className='dis-con-m'>
              <svg width='14' height='14' viewBox='0 0 12 12' fill='none'>
                <path
                  d='M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z'
                  fill='#008C00'
                ></path>
              </svg>
              <div className='dis-div'>{dis}%</div>
            </div>
            <div className='ori-price-con dis-con-m'>
              <div>₹{original}</div>
            </div>
            <div className='price-con-m'>
              <div>₹{price}</div>
            </div>
          </div>
          <div className="offer-con-m">
            <div className="wow">
            <img src="https://rukminim2.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90" alt="" />

            </div>
            <div className="offer-money"> ₹9,170 </div>
            <div className="offer-text">with Bank offer</div>
          </div>
          <div className="assured-m">
            <div className="assured-img">
                <img src="https://rukminim2.flixcart.com/www/60/16/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="like-btn-m">
        <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z" fill="#fff" stroke="#B8BBBF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
      </div>
    </div>
  )
}

export default CardM
