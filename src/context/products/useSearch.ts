import { useEffect, useState } from 'react'
import { productType } from '../../types/productType'

const useSearch = (
  setFiltered: React.Dispatch<React.SetStateAction<productType[]>>,
  product: productType[]
) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const regEx = new RegExp(searchInput, 'gi')
  const results = product.filter(each => regEx.test(each.name || each.brand))  
  useEffect(() => { 
    setFiltered(results)         
  }, [ searchInput, setFiltered]) 
                              
  return { searchInput, setSearchInput,results }
}
                   
export default useSearch
    