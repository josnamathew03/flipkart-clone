import { useEffect, useState } from 'react'
import { productType } from '../../../types/productType'

import Card from './Card'

const CardRow = () => {
  const [products, setProducts] = useState<productType[]>([])
  const [filtered,setFiltered] = useState<productType[]>([])

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then((data: productType[]) => setProducts(data))
      .catch(err => console.log(' error ', err))
  }, [])
  console.log(products)

  return (
    <div className='card-row'>
      <div className='card-row-con'>
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default CardRow
