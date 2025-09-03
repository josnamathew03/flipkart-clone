

const Header2M = () => {
  return (
    <div className='header2-m'>
      <div className='sort-wrap'>
        <div className='sort-div'>
          <svg width='20' height='20' viewBox='0 0 256 256'>
            <path fill='none' d='M0 0h256v256H0z'></path>
            <path
              fill='none'
              stroke='#111112'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='12'
              d='m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56'
            ></path>
          </svg>
          <div className='sort'>Sort</div>
        </div>
      </div>
      <div className='seperator'></div>
      <div className='sort-wrap'>
        <div className='sort-div'>
          <div className='filter-svg'>
            <svg width='20' height='20' viewBox='0 0 256 256'>
              <path fill='none' d='M0 0h256v256H0z'></path>
              <path
                fill='none'
                stroke='#111112'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='12'
                d='M148 172H40M216 172h-28'
              ></path>
              <circle
                cx='168'
                cy='172'
                r='20'
                fill='none'
                stroke='#111112'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='12'
              ></circle>
              <path
                fill='none'
                stroke='#111112'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='12'
                d='M84 84H40M216 84h-92'
              ></path>
              <circle
                cx='104'
                cy='84'
                r='20'
                fill='none'
                stroke='#111112'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='12'
              ></circle>
            </svg>
            <div className='svg-num'>4</div>
          </div>
          <div className='sort'>Filter</div>
        </div>
      </div>
    </div>
  )
}

export default Header2M
