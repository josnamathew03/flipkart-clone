import Header3Spec from './Header3Spec'

const Header3M = () => {
  return (

          <div className='header3-m common'>
            <div className='header3-m-wrap common'>
              <div className='offer-nav-first'>
                      <div className='offer-nav common '>
                        <div className='offer-icon'>
                          <img
                            src='https://rukminim2.flixcart.com/www/64/64/promos/31/05/2023/a076c5a0-3335-4979-908e-49224c2507ea.png?q=60'
                            alt=''
                          />
                        </div>
                        <div className='common'>
                          <div className='offer-text-m offerr'>
                            <span>50% or more</span>
                          </div>
                    </div>
                  </div>
              </div>

              <Header3Spec className='blue-back'>Bluetooth</Header3Spec>
              <Header3Spec>Fast Charging</Header3Spec>
              <Header3Spec>Noise Cancellation</Header3Spec>
            </div>
          </div>
  
  )
}

export default Header3M
