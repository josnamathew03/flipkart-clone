
import '../Header.css'

const HeaderIcon = () => {
  return (
    <div className="logo-container">
      <div className='logo-wrap'>
       <a href="/">
        <img width="75" src="/logo.png" alt=''></img>
       </a>
        <a href="/" className='logo-anchor'>
        Explore
        <span>Plus</span>
          <img width="10" height="10" alt='' src="/logo2.png"></img>
        </a>
      </div>
    </div>
  )
}

export default HeaderIcon
