import { useReducer, useState } from 'react'
export type sortActionType = 'low-to-high' | 'high-to-low' | 'popularity'

const useSort = () => {
  const reducer = (state: string, action: sortActionType): string => {
    switch (action) {
      case 'low-to-high':
        return 'low-to-high'
      case 'high-to-low':
        return 'high-to-low'
      case 'popularity':
        return 'popularity'
      default:
        return state
    }
  }

  const [sort, dispatch] = useReducer(reducer, 'popularity')

  //   return { lowtohigh, setLowtohigh }
  return { sort, dispatch }
}

export default useSort
