import { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { ProductContext } from '../../../context/products/ProductsProvider'
import { productType } from '../../../types/productType'

const CardRow = () => {
  const ctx = useContext(ProductContext)

  const { products, filtered, pageIndex } = ctx
  const [paginated, setPaginated] = useState<productType[]>([])

  useEffect(() => {
    setPaginated(products.slice(pageIndex[0], pageIndex[1]))
  }, [pageIndex, products])
  console.log(pageIndex)
  console.log(paginated)

  return (
    <div className='card-row'>
      <div className='card-row-con'>
        {(filtered.length > 0 ? filtered : paginated).map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
      
export default CardRow
