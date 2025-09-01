const Pagination = () => {
  return (
    <>
      <div className='pagination-con'>
        <div className='pagination-wrap'>
          <span>Page 1 of 43</span>
          <nav className='pagination-nav'>
            <a href='/' className='first-anchor'>
              1
            </a>
            <a href='/'>2</a>
            <a href='/'>3</a>
            <a href='/'>4</a>
            <a href='/'>5</a>
            <a href='/'>6</a>
            <a href='/'>7</a>
            <a href='/'>8</a>
            <a href='/'>9</a>
            <a href='/'>10</a>
            <a href='/' className='next-anchor'>
              NEXT
            </a>
          </nav>
          <span className='pagination-span'></span>
        </div>
      </div>
      <div className='found-con'>
        <div className='found-wrap'>
          <span className="found">Did you find what you were looking for?</span>
          <div className='yes-no-div'>
            <span>Yes</span>
            <span>No</span>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination
