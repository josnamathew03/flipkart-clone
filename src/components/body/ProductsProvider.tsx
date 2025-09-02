import { ReactNode, useEffect, useState } from 'react'
import { productType } from '../../types/productType'

import { createContext } from 'react'

type ProductsContextType = {
  products: productType[]
  filtered: productType[]
  setPriceRange: (min: number, max: number) => void
  selectedFilters: string[]
  clearFilters: () => void
  removeFilter:(filter: string)=>void
  setRatings : (value: number) => void
  //   addFilter: (filter: string) => void
}

export const ProductContext = createContext<ProductsContextType>({
  products: [],
  filtered: [],
  setPriceRange: () => {},
  selectedFilters: [],
  clearFilters: () => {},
  removeFilter: (filter:string)=> {},
  setRatings: (value: number) => {}

  //   addFilter: ()=>{}
})

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered, setFiltered] = useState<productType[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const setPriceRange = (min: number, max: number) => {
    setFiltered(products.filter(p => p.price >= min && p.price <= max))
    if (min !== 0 || max !== 10000) {
      const filter = `₹${min}-₹${max}`
      setSelectedFilters(prev => {
        const withoutPrice = prev.filter(f => !f.includes('₹'))
        return [...withoutPrice, filter]
      })
    }
  }

  const setRatings = (value: number) =>{
    setFiltered(prev=> prev.length > 0 ? prev.filter(p=> p.stars.star> value) : products.filter(p=> p.stars.star> value))
  }

  const clearFilters = () => {
    setSelectedFilters([])
  }

  const removeFilter = (filter: string)=>{
        setSelectedFilters(prev=> prev.filter(f=>( f !== filter)))
  }
  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then((data: productType[]) => setProducts(data))
      .catch(err => console.log(' error ', err))
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        filtered,
        setPriceRange,
        selectedFilters,
        clearFilters,
        removeFilter,
        setRatings
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
