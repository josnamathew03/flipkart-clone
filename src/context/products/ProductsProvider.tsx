import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react'
import { ProductsContextType } from '../../types/ProductsContextType'
import { productType } from '../../types/productType'
import priceFilter from './usePriceFilter'
import ratingFilter from './useRatingFilter'

export const ProductContext = createContext<ProductsContextType>(
  {} as ProductsContextType
)

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered, setFiltered] = useState<productType[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const price = priceFilter( setSelectedFilters)
  const rating = ratingFilter( setSelectedFilters)

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
      rating.setChecked([])
    }
  }

  useEffect(() => {
    let temp = products
    if (rating.checked.length > 0) {
      temp = temp.filter(p => rating.checked.some(v => p.stars.star >= v))
    }
    temp = temp.filter(p => p.price >= price.min && p.price <= price.max)
    setFiltered(temp)
  }, [rating.checked, price.max, price.min,products])

  useEffect(() => {
    fetch(process.env.PUBLIC_URL  + '/data/products.json')
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
        setSliderValue: price.setSliderValue
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider
