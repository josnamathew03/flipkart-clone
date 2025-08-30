import './Footer.css'
import Footer1 from './footer1/Footer1'
import Footer2 from './footer2/Footer2'

const Footer = () => {
  return (
    <div className="footer"> 
      <div className='footer-wrap'>
        <Footer1/>
        <Footer2/>
      </div>
    </div>
  )
}

export default Footer
