import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react'
import { ProductsContextType } from '../../types/ProductsContextType'
import { productType } from '../../types/productType'
import usePriceFilter from './usePriceFilter'
import useRatingFilter from './useRatingFilter'
import useSearch from './useSearch'
import usePagination from './usePagination'
import useSort from './useSort'

export const ProductContext = createContext<ProductsContextType>(   
  {} as ProductsContextType
)

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered, setFiltered] = useState<productType[]>([])    
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])   
      
  const price = usePriceFilter(setSelectedFilters)
  const rating = useRatingFilter(setSelectedFilters)
  const search = useSearch(setFiltered, products)
  const pagination = usePagination(products) 
  const sorting = useSort()
                                                                          
  const clearFilters = () => {
    setSelectedFilters([])                                 
    rating.setChecked([])
    price.setPriceChecked([])                           
    setFiltered([])
    price.setMin(0)
    price.setMax(10000) 
    price.setSliderValue(8)
  }
  
  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter))
    if (filter.includes('₹')) {
      price.setMin(0)
      price.setMax(10000)
      price.setSliderValue(8)
    } else {
      rating.setChecked(prev =>
        prev.filter(f => f !== Number(filter.charAt(0)))                  
      )                                                                                                                                                                                                  
    }
  }
                                                                                                                  
  useEffect(() => {                    
    let temp = pagination.paginated                                                                                       
    if (rating.checked.length > 0) {              
      temp = temp.filter(p => rating.checked.some(v => p.stars.star >= v))
    }
    temp = temp.filter(p => p.price >= price.min && p.price <= price.max)
    if(sorting.lowtohigh){
      temp = temp.sort((a,b)=> a.price - b.price)
    }
    if (rating.checked.length > 0 || price.min > 0 || price.max < 10000 || sorting.lowtohigh) {
      setFiltered(temp)
    }
    else{
      setFiltered([])
    }              
  }, [rating.checked, price.max, price.min, products,sorting.lowtohigh])

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/products.json')            
      .then(res => res.json())
      .then((data: productType[]) => setProducts(data))
      .catch(err => console.log(' error ', err))
  }, [])
                            
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [filtered])             

  return (  
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filtered,
        selectedFilters,
        clearFilters,
        removeFilter,
        // setRatings,
        checked: rating.checked,
        toggleRating: rating.toggleRating,
        setPriceRange: price.setPriceRange,
        priceChecked: price.priceChecked,
        togglePrice: price.togglePrice,
        setMin: price.setMin,
        setMax: price.setMax,
        min: price.min,
        max: price.max,
        sliderValue: price.sliderValue,
        setSliderValue: price.setSliderValue,
        setSearchInput: search.setSearchInput,
        searchInput: search.searchInput,
        // results: search.results,
        pageIndex: pagination.pageIndex,
        setPageIndex: pagination.setPageIndex,
        setCurrentPage: pagination.setCurrentPage,
        currentPage: pagination.currentPage,
        paginated: pagination.paginated,
        lowtohigh: sorting.lowtohigh,
        setLowtohigh: sorting.setLowtohigh

      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
