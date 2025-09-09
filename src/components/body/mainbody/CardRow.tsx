import { useContext  } from 'react'
import Card from './Card'
import { ProductContext } from '../../../context/products/ProductsProvider'

const CardRow = () => {
  const ctx = useContext(ProductContext)

  const { filtered, searchInput,paginated } = ctx



  return (
    <div className='card-row'>
      <div className='card-row-con'>
        {filtered.length > 0 ? (
          filtered.map(product => <Card key={product.id} {...product} />)
        ) : searchInput ? (
          <p style={{'textAlign': 'center','display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' ,'height': '300px' , 'fontSize': '20px', 'width': '100%' }}>No results</p>
        ) : (
          paginated.map(product => <Card key={product.id} {...product} />)
        )}                                                                 
      </div>                                              
    </div>                
  )     
}

export default CardRow
