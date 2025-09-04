const AddComponent = () => {
  return (
    <div className='add-item'>
      <div className='add-item-image-wrap'>
        <div className='add-item-image'>
          <img
            src='https://rukminim2.flixcart.com/image/130/130/xif0q/headphone/m/v/r/-original-imahew8a82eyehe4.jpeg?q=80&crop=false'
            alt=''
          />
        </div>
        <div className='add-star-con'>
          <div className='add-star'>
            <div className='add-star-count'>4</div>
            <div className='add-star-icon'>★</div>
          </div>
        </div>
      </div>
      <div className='add-des-con'>
        <div className='add-des-name'>
          Noise Buds VS102 Elite with 50Hr Playtime, ENC, Quad Mic, Chrome
          finish Flybird Design Bluetooth
        </div>
        <div className='add-des-rest'>
          <div className='add-price'>
            <span className='add-original'>3,499</span>
            <span className="add-offer">₹999</span>
          </div>
          <div className="add-discount">
            <span>71% off</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddComponent
