import React, { useState } from 'react'
import { productType } from '../../types/productType'

const useRatingFilter = (
  products: productType[],
  setFiltered: React.Dispatch<React.SetStateAction<productType[]>>,
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const [checked, setChecked] = useState<number[]>([])
  const setRatings = (values: number[]) => {
    const rate = values.map(v => `${v}★ & above`)

    if (values.length === 0) return
    setFiltered(products.filter(p => values.some(v => p.stars.star >= v)))

    setSelectedFilters(rate)
  }

  const toggleRating = (value: number) => {
    setChecked(prev => {
      console.log(value, prev)

      const updated = prev.includes(value)
        ? prev.filter(f => f != value)
        : [...prev, value]

      setRatings(updated)
      return updated
    })
  }

  return {
    checked,
    toggleRating,
    setChecked
  }
}

export default useRatingFilter
