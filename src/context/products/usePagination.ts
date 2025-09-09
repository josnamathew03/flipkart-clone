import  { useEffect, useState } from 'react'
import { productType } from '../../types/productType';

const usePagination = (products: productType[]) => {
    const [pageIndex, setPageIndex] = useState<[number,number ]>([0,10]);
    const [currentPage, setCurrentPage] = useState(1)
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, [pageIndex])
        const [paginated, setPaginated] = useState<productType[]>([])

  useEffect(() => {
    setPaginated(products.slice(pageIndex[0], pageIndex[1]))
  }, [pageIndex, products])
    
return {pageIndex,setPageIndex,currentPage, setCurrentPage,paginated}
}

export default usePagination
     