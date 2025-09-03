import Header1M from './Header1M'
import Header2M from './Header2M'
import Header3M from './Header3M'
import './HeaderM.css'

const HeaderM = () => {
  return (
    <div className='header-m'>
      <div className='header-wrap-m'>
        <Header1M />
        <Header2M/>
        <Header3M/>
      </div>
    </div>
  )
}

export default HeaderM
