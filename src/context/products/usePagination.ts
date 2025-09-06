import  { useEffect, useState } from 'react'

const usePagination = () => {
    const [pageIndex, setPageIndex] = useState<[number,number ]>([0,10]);
    const [currentPage, setCurrentPage] = useState(1)
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, [pageIndex])
    
return {pageIndex,setPageIndex,currentPage, setCurrentPage}
}

export default usePagination
     