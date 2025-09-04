import { createPortal } from 'react-dom'
import HeaderAnchorM from './headerM/HeaderAnchorM'
import './FilterComponent.css'
import Checkboxes from '../components/Checkboxes'
import { useContext, useState } from 'react'
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
  const [viewRating, setViewRating] = useState(false)
  const ctx = useContext(ProductContext)
  const { checked, toggleRating, setFiltered, togglePrice, priceChecked } = ctx

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
          <div className='each-type' onClick={() => setViewRating(false)}>
            Price
          </div>
          <div className='each-type' onClick={() => setViewRating(true)}>
            Rating
          </div>
        </div>
        <div className='filter-selection'>
          <div className='rating-checkbox'>
            {viewRating && (
              <>
                {[4, 3, 2, 1].map(each => (
                  <Checkboxes
                  key={each}
                    name='ratings'
                    checked={checked.includes(each)}
                    value={each}
                    label= {`${each}★ & above`}
                    handleChange={e => toggleRating(Number(e.target.value))}
                  />
                ))}
               
              </>
            )}
          </div>

          <div className='price-checkbox' onClick={() => setViewRating(false)}>
            {!viewRating && (
              <>
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(600)}
                  value={'0-600'}
                  label='Rs. 600 and below'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(601)}
                  value={'601-1000'}
                  label='Rs. 601 to Rs. 1000'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(1001)}
                  value={'1001-1500'}
                  label='Rs. 1001 to Rs. 1500'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(1501)}
                  value={'1501-2000'}
                  label='Rs. 1501 to Rs. 2000'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(2001)}
                  value={'2001-2600'}
                  label='Rs. 2001 to Rs. 2600'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(2001)}
                  value={'2601-4000'}
                  label='Rs. 2601 to Rs. 4000'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(2001)}
                  value={'4001-7000'}
                  label='Rs. 4001 to Rs. 7000'
                  handleChange={e => togglePrice(e.target.value)}
                />
                <Checkboxes
                  name='price'
                  checked={priceChecked.includes(2001)}
                  value={'7001-10000'}
                  label='Rs. 7001 to Rs. 10000'
                  handleChange={e => togglePrice(e.target.value)}
                />
              </>
            )}
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
