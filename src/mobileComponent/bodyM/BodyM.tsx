import AddComponent from './AddComponent'
import './BodyM.css'
import CardRowM from './CardRowM'

const BodyM = () => {
  return (
    <div className='body-m'>
      <div className='des-con'>
        <div className='des-wrap'>
          <span>
            <p>
              Check out the Exclusive Launches of Samsung Galaxy Buds Pro active
              noise cancellation enable bluetooth headset with different colors
              will be available from 28th Jan 2021.
            </p>
            <p>
              <br />
            </p>
            <p>
              Also check: Skullcandy Wireless, Skullcandy Smokin Buds 2, JBL
              Headset, Jabra Headphones
            </p>
          </span>
        </div>
        <div className='read-container'>
          <span>Read More</span>
        </div>
        {/* <div className='border'></div> */}
      </div>
      <div className='ad-container'>
        <div className='add-back'>
          <img
            src='https://rukminim2.flixcart.com/fk-p-flap/750/484/image/Mask%20Group-2.png?q=60'
            alt=''
          />
        </div>
        <div className='add-content'>
          <div className='add-content-wrap'>
            <div className='deal-wrap'>
              <div className='add-icon'>
                <div className='add-icon-text'>AD</div>
              </div>
              <div className='deal-head-wrap'>
                <div className='deal-head-image'>
                  <img
                    src='https://rukminim2.flixcart.com/fk-p-ads/104/104/dp-doc/1753944214129-cmdr13l2p25do0q0wd68eul7s-abc.png?q=80'
                    alt=''
                  />
                </div>
                <div className='deal-head-text'>
                  Jaw Dropping Deal | Upto 70% Off
                </div>
                <div className='shop-now'>
                  <div className='shop-now-text'>Shop now</div>
                  <div className='shop-now-img'>
                    <img
                      src='https://rukminim2.flixcart.com/www/12/16/promos/03/11/2022/682f36d6-bb05-4c07-a914-fb56eb7f9248.png?q=80'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='add-each-item'>
                <AddComponent/>
                <AddComponent/>

                <AddComponent/>

            </div>
          </div>
        </div>
      </div>
      <CardRowM />
    </div>
  )
}

export default BodyM
