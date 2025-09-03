import { ReactNode } from "react"

type HeaderAnchorMProp ={
    svg :  ReactNode
}

const HeaderAnchorM = ({svg}: HeaderAnchorMProp) => {
  return (
      <a href='/' className='arrow-anchor-m'>
       {svg}
          </a>
  )
}

export default HeaderAnchorM
