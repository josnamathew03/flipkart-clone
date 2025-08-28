const Categories = () => {
  return (
    <div className='categories-container'>
      <div className='cat-head'>
        <span>categories</span>
      </div>
      <div className='audio-con'>
        <svg
          width='10'
          height='10'
          viewBox='0 0 16 27'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z'></path>
        </svg>
        <a href='/'>Audio & Video</a>
      </div>
      <div className='audio-con headset-con'>
        <svg
          width='10'
          height='10'
          viewBox='0 0 16 27'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z'
           
          ></path>
        </svg>
        <a href='/'>Headset</a>
      </div>
    </div>
  )
}

export default Categories
