import { ReactNode, useEffect, useState } from 'react'
import { productType } from '../../types/productType'

import { createContext } from 'react'

type ProductsContextType = {
  products: productType[]
  filtered: productType[]
  setPriceRange: (min: number, max: number) => void
}

export const ProductContext = createContext<ProductsContextType>({
  products: [],
  filtered: [],
  setPriceRange: () => {}
})

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered, setFiltered] = useState<productType[]>([])

  const setPriceRange = (min: number, max: number) => {
    setFiltered(products.filter(p => p.price >= min && p.price <= max))
  }
  useEffect(() => {
    console.log('Filtered products:', filtered)
  }, [filtered])

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then((data: productType[]) => setProducts(data))
      .catch(err => console.log(' error ', err))
  }, [])

  return (
    <ProductContext.Provider value={{ products, filtered, setPriceRange }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
