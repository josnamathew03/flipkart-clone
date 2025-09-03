import { createPortal } from 'react-dom'
import HeaderAnchorM from './headerM/HeaderAnchorM'
import './FilterComponent.css'

const FilterComponent = () => {
  return createPortal(
    <div className='filter-com-wrap'>
      <div className='filter-header'>
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
        <div >
            <h1>Filters</h1>
            <span>clear Filters</span>
        </div>
      </div>
    </div>,
    document.getElementsByClassName('mobile')[0]
  )
}

export default FilterComponent
