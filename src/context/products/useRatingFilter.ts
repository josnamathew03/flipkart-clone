import React, { useState } from 'react'

const useRatingFilter = (
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const [checked, setChecked] = useState<number[]>([])
  const setRatings = (values: number[]) => {
    const rate = values.map(v => `${v}★ & above`)

    if (values.length === 0) return
    // setFiltered(products.filter(p => values.some(v => p.stars.star >= v)))

    setSelectedFilters(rate)
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

  return {
    checked,
    toggleRating,
    setChecked
  }
}

export default useRatingFilter
