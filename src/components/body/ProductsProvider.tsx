import { ReactNode, useEffect, useState } from 'react'
import { productType } from '../../types/productType'

import { createContext } from 'react'

type ProductsContextType = {
  products: productType[]
  filtered: productType[]
  setPriceRange: (min: number, max: number) => void
  selectedFilters: string[]
  clearFilters: () => void
  removeFilter: (filter: string) => void
  // setRatings: (values: number[]) => void
  setFiltered: (arr: productType[]) => void
  checked: number[]
  toggleRating: (value: number) => void
  priceChecked: number[]
  togglePrice: (value: string) => void
}

export const ProductContext = createContext<ProductsContextType>({
  products: [],
  filtered: [],
  setPriceRange: () => {},
  selectedFilters: [],
  clearFilters: () => {},
  removeFilter: (filter: string) => {},
  // setRatings: (values: number[]) => {},
  checked: [],
  toggleRating: (value: number) => {},
  setFiltered: (arr: productType[]) => {},
  priceChecked: [],
  togglePrice: (value: string) => {}
})

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered, setFiltered] = useState<productType[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [checked, setChecked] = useState<number[]>([])
  const [priceChecked, setPriceChecked] = useState<number[]>([])

  const togglePrice = (value: string) => {

    const [v1, v2] = value.split('-').map(Number)


    setPriceChecked(prev => {
      const exists = prev.includes(v1) && prev.includes(v2)

      const updated = exists
        ? prev.filter(f => f !== v1 && f !== v2)
        : [...prev, v1, v2]

      const [min, max] = [Math.min(...updated), Math.max(...updated)]

      setPriceRange(min, max)
      return updated
    })
  }

  const toggleRating = (value: number) => {
    setChecked(prev => {
      const updated = prev.includes(value)
        ? prev.filter(f => f != value)
        : [...prev, value]

      setRatings(updated)
      return updated
    })
  }

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

  const setRatings = (values: number[]) => {
    const rate = values.map(v => `${v}★ & above`)

    if (values.length === 0) return
    setFiltered(products.filter(p => values.some(v => p.stars.star >= v)))

    setSelectedFilters(rate)
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setFiltered([])
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter))
  }
  useEffect(() => {
    fetch('/data/products.json')
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
        filtered,
        setPriceRange,
        selectedFilters,
        clearFilters,
        removeFilter,
        // setRatings,
        checked,
        toggleRating,
        setFiltered,
        priceChecked,
        togglePrice
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
