import { useContext } from "react"
import { WishlistContext } from "../../context/wishlist/WishlistProvider"
import WishlistCard from "./WishlistCard"
import '../body/mainbody/MainBody.css'
import './Wishlist.css'

const Wishlist = () => {
    const {wishlist} = useContext(WishlistContext)
    console.log(wishlist)
  return (
    
    <div className="wishlist-container">
      {wishlist.map(each=><WishlistCard key={each.id} id={each.id} image={each.image} name={each.name} price={each.price} original={each.original}/>)}
    </div>
  )
}

export default Wishlist
