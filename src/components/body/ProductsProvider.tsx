import { ReactNode, useEffect, useState } from 'react'
import { productType } from '../../types/productType'

import { createContext } from 'react'

type ProductsContextType = {
  products: productType[]
  filtered: productType[]
  setPriceRange: (min: number, max: number) => void
  selectedFilters: string[]
//   addFilter: (filter: string) => void

}

export const ProductContext = createContext<ProductsContextType>({
  products: [],
  filtered: [],
  setPriceRange: () => {},
  selectedFilters: [],
//   addFilter: ()=>{}
})

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered, setFiltered] = useState<productType[]>([])
  const [selectedFilters,setSelectedFilters] = useState<string[]>([])


  const setPriceRange = (min: number, max: number) => {
    setFiltered(products.filter(p => p.price >= min && p.price <= max))
    const filter = `₹${min}-₹${max}`
    setSelectedFilters((prev)=>{
        const withoutPrice = prev.filter(f=>!f.includes('₹'))
        return [...withoutPrice,filter]
  })
  }


  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then((data: productType[]) => setProducts(data))
      .catch(err => console.log(' error ', err))
  }, [])

  return (
    <ProductContext.Provider value={{ products, filtered, setPriceRange , selectedFilters}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
