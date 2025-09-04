type Header3SpecProp = {
  className?: string
  children: string
}
const Header3Spec = ({ className, children }: Header3SpecProp) => {
  return (
    <div className='offer-nav-first'>
      <div className={`offer-nav common ${className}`}>
        <div className='offer-icon'>
          <img
            src='https://rukminim2.flixcart.com/www/32/32/promos/06/09/2022/ecf39e45-c8f0-4976-bbd3-43145e35d030.png?q=80'
            alt=''
          />
        </div>
        <div className='common'>
          <div className='offer-text-m'>
            <span>{children}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header3Spec
