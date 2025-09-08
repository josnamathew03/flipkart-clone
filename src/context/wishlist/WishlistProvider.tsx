import { createContext, ReactNode, useReducer } from 'react'
import { WishlistContextType } from '../../types/WishlistContextType'

export  type wishlistType={
    id: number
    image: string
    name: string
    price: number
    original: number
  }

  export type actionType =
    {type: 'addItem', item: wishlistType} |
    {type: 'removeItem', id: number}|
    {type: 'clearAll'}

  
export const WishlistContext = createContext<WishlistContextType>(
  {} as WishlistContextType
)


const WishlistProvider = ({ children }: { children: ReactNode })=> {

  const reducer = (state: wishlistType[], action: actionType): wishlistType[] =>{
    switch(action.type){
        case 'addItem':
            return [...state,action.item]
        case 'removeItem':
            return state.filter(f=> f.id !== action.id)
        case 'clearAll':
            return []
        default:
            return state
    }
  }

  const [wishlist, dispatch] = useReducer(reducer, [])
    // console.log(wishlist)

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
