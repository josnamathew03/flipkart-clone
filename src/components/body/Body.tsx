import './Body.css'
import MainBody from './mainbody/MainBody'
import Sidebar from './sidebar/Sidebar'

const Body = () => {
  return (
      <div className='body-container'>
        <div className='body'>
          <Sidebar />
          <MainBody />
        </div>
      </div>
  )
}

export default Body
