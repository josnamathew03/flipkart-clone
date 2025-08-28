import { ReactNode } from "react"

type buttonProps ={
    className : string
    children: string| ReactNode
}
const Button = ({className,children}: buttonProps) => {
  return (
    <button className={className}>
      {children}
    </button>
  )
}

export default Button
