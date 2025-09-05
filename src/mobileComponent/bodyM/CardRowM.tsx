import CardM from "./CardM"
import { useContext } from "react"
import { ProductContext } from "../../context/products/ProductsProvider"

const CardRowM = () => {
      const ctx = useContext(ProductContext)
    const {products,filtered} = ctx
  return (
    <div className="card-row-m">
      {/* <CardM/>
        <div className="card-seperator"></div>
      <CardM/>
     */}
     {(filtered.length === 0? products : filtered ).map(product=>(<CardM key={product.id} {...product}/>))}

    </div>
  )
}

export default CardRowM
