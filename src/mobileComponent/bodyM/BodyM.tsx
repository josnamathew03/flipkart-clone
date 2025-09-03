
import './BodyM.css'
import CardRowM from './CardRowM'


const BodyM = () => {
  return (
    <div className='body-m'>
      <div className='des-con'>
        <div className='des-wrap'>
          <span>
            <p>Check out the Exclusive Launches of Samsung Galaxy Buds Pro  active noise cancellation enable bluetooth headset with different colors will be available from 28th Jan 2021.</p>
            <p><br /></p>
            <p>Also check: Skullcandy Wireless, Skullcandy Smokin Buds 2, JBL Headset, Jabra Headphones</p>
          </span>

        </div>
        <div className="read-container">
          <span>Read More</span>
        </div>
        {/* <div className='border'></div> */}
      </div>
      <div className='ad-container'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/750/484/image/Mask%20Group-2.png?q=60" alt="" />
        
      </div>
      <CardRowM/>
    </div>
  )
}

export default BodyM
