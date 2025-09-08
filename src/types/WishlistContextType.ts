import { actionType, wishlistType } from "../context/wishlist/WishlistProvider"

export type WishlistContextType = {
    wishlist: wishlistType[],
    dispatch:  React.ActionDispatch<[action: actionType]>
}