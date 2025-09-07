import { useContext } from 'react'
import { ProductContext } from '../../../context/products/ProductsProvider'

const Pagination = () => {
  const { setPageIndex, currentPage, setCurrentPage } =
    useContext(ProductContext)

  const pages: [number, number][] = [
    [0, 10],
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [0, 10],
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50]
  ]
  return (
    <>
      <div className='pagination-con'>
        <div className='pagination-wrap'>
          <span>Page 1 of 43</span>
          <nav className='pagination-nav' >
            {currentPage > 1 && (
              <a
                href='/'
                className='next-anchor'
                onClick={e => {
                  e.preventDefault()
                  console.log(currentPage)
                  setCurrentPage(currentPage - 1)
                  setPageIndex(pages[currentPage])
                  console.log(currentPage)
                }}
              >
                Previous
              </a>
            )}
            {pages.map((each, ind) => {
              return (
                <a
                  href='/'
                  className={currentPage === ind + 1 ? 'first-anchor' : ''}
                  onClick={e => {
                    e.preventDefault()
                    setPageIndex(each)
                    setCurrentPage(ind + 1)
                  }}
                >
                  {ind + 1}
                </a>
              )
            })}

            {currentPage <= 9 && (
              <a
                href='/'
                className='next-anchor'
                onClick={e => {
                  e.preventDefault()
                  setCurrentPage(currentPage + 1)
                  setPageIndex(pages[currentPage])
                  console.log(currentPage)
                }}
              >
                NEXT
              </a>
            )}
          </nav>
          <span className='pagination-span'></span>
        </div>
      </div>
      <div className='found-con'>
        <div className='found-wrap'>
          <span className='found'>Did you find what you were looking for?</span>
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
