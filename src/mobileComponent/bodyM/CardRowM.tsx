import CardM from "./CardM"
import { useContext } from "react"
import { ProductContext } from "../../components/body/ProductsProvider"

const CardRowM = () => {
      const ctx = useContext(ProductContext)
    const {products} = ctx
  return (
    <div className="card-row-m">
      {/* <CardM/>
        <div className="card-seperator"></div>
      <CardM/>
     */}
     {products.map(product=>(<CardM key={product.id} {...product}/>))}

    </div>
  )
}

export default CardRowM
