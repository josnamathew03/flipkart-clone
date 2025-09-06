import { productType } from "./productType"

export type ProductsContextType = {
  products: productType[]
  filtered: productType[]
  setPriceRange: (min: number, max: number) => void
  selectedFilters: string[]
  clearFilters: () => void
  removeFilter: (filter: string) => void
  // setRatings: (values: number[]) => void
  checked: number[]
  toggleRating: (value: number) => void
  priceChecked: number[]
  togglePrice: (value: string) => void
  setMin: (value: number) => void
  setMax: (value: number) => void
  min: number
  max: number
  sliderValue: number
  setSliderValue: (value: number) => void
  setSearchInput: (value: string) => void
  searchInput: string
}