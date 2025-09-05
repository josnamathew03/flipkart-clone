import React, { useState } from 'react'
import { productType } from '../../types/productType'

const usePriceFilter = (
  products: productType[],
  setFiltered: React.Dispatch<React.SetStateAction<productType[]>>,
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const [priceChecked, setPriceChecked] = useState<number[]>([])
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10000)
  const [sliderValue, setSliderValue] = useState(8)

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

  const setPriceRange = (min: number, max: number) => {
    setFiltered(products.filter(p => p.price >= min && p.price <= max))
    if (min !== 0 || (max !== 10000 && max !== undefined)) {
      const filter = `₹${min}-₹${max}`
      setSelectedFilters(prev => {
        const withoutPrice = prev.filter(f => !f.includes('₹'))
        return [...withoutPrice, filter]
      })
    }
  }

  return {
    setPriceRange,
    priceChecked,
    togglePrice,
    setMin,
    setMax,
    min,
    max,
    sliderValue,
    setSliderValue,
    setPriceChecked
  }
}

export default usePriceFilter
