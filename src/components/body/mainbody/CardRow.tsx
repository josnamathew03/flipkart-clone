import { useContext } from 'react'
import Card from './Card'
import { ProductContext } from '../../../context/products/ProductsProvider'

const CardRow = () => {

  const ctx = useContext(ProductContext)
  if(!ctx) return null;
  const {products,filtered} = ctx
  return (
    <div className='card-row'>
      <div className='card-row-con'>
        {(filtered.length > 0 ? filtered : products).map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default CardRow
