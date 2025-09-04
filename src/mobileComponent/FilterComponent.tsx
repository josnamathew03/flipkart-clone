import { createPortal } from 'react-dom'
import HeaderAnchorM from './headerM/HeaderAnchorM'
import './FilterComponent.css'
import Checkboxes from '../components/Checkboxes'
import { useContext } from 'react'
import { ProductContext } from '../components/body/ProductsProvider'
import Button from '../components/Button'

type FilterComponentProps = {
  showFilter: boolean
  setShowFilter: (value: boolean) => void
}

const FilterComponent = ({
  showFilter,
  setShowFilter
}: FilterComponentProps) => {
  const ctx = useContext(ProductContext)
  const { checked, toggleRating, setFiltered , togglePrice, priceChecked} = ctx

  return createPortal(
    <div className='filter-com-wrap'>
      <div className='filter-header'>
        <div
          className='back-btn'
          onClick={() => {
            setShowFilter(false)
            setFiltered([])
          }}
        >
          <HeaderAnchorM
            svg={
              <svg
                width='19'
                height='16'
                viewBox='0 0 19 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817'
                  stroke='black'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  fill='none'
                ></path>
              </svg>
            }
          />
        </div>

        <div className='filter-head-m'>
          <h1>Filters</h1>
          <span>Clear Filters</span>
        </div>
      </div>
      <div className='filter-body'>
        <div className='filter-type-selection'>
          <div className='each-type'>Price</div>
          <div className='each-type'>Rating</div>
        </div>
        <div className='filter-selection'>
          <div className='rating-checkbox'>
            <Checkboxes
              name='ratings'
              checked={checked.includes(4)}
              value={4}
              label='4★ & above'
              handleChange={e => toggleRating(Number(e.target.value))}
            />
            <Checkboxes
              name='ratings'
              checked={checked.includes(3)}
              value={3}
              label='3★ & above'
              handleChange={e => toggleRating(Number(e.target.value))}
            />
            <Checkboxes
              name='ratings'
              checked={checked.includes(2)}
              value={2}
              label='2★ & above'
              handleChange={e => toggleRating(Number(e.target.value))}
            />
            <Checkboxes
              name='ratings'
              checked={checked.includes(1)}
              value={1}
              label='1★ & above'
              handleChange={e => toggleRating(Number(e.target.value))}
            />
          </div>

          <div className='price-checkbox'>
            <Checkboxes
              name='price'
              checked={priceChecked.includes( 600)}
              value={"0,600"}
              label='Rs. 600 and below'
              handleChange={e => togglePrice(e.target.value)}
            />
            <Checkboxes
              name='price'
              checked={priceChecked.includes(601 )}
              value={"601-1000"}
              label='Rs. 601 to Rs. 1000'
              handleChange={e => togglePrice(e.target.value)}
            />
            <Checkboxes
              name='price'
              checked={checked.includes(1001)}
              value={"1001-1500"}
              label='Rs. 1001 to Rs. 1500'
              handleChange={e => togglePrice(e.target.value)}
            />
            <Checkboxes
              name='price'
              checked={checked.includes(1501)}
              value={"1501-2000"}
              label='Rs. 1501 to Rs. 2000'
              handleChange={e => togglePrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='filter-apply-btn' onClick={() => setShowFilter(false)}>
        <Button className='apply-btn'>Apply</Button>
      </div>
    </div>,
    document.getElementsByClassName('mobile')[0]
  )
}

export default FilterComponent
