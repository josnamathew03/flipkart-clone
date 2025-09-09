import { useReducer, useState } from 'react'
export type sortActionType = 'lowtohigh' | 'hightolow' | 'popular'
const useSort = () => {
  const reducer = (state: string, action: sortActionType): string => {
    switch (action) {
      case 'lowtohigh':
        return 'lowtohigh'
      case 'hightolow':
        return 'hightolow'
      case 'popular':
        return 'popular'
      default:
        return state
    }
  }

  const [sort, dispatch] = useReducer(reducer, '')
  console.log(sort)

  //   return { lowtohigh, setLowtohigh }
  return { sort, dispatch }
}

export default useSort
