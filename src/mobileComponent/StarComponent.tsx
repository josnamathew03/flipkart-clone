type StarProps = {
  filled?: boolean 
  half?: boolean   
  size?: number
}

export const StarComponent = ({ filled = false, half = false, size = 18 }: StarProps) => {
  if (half) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="rgb(0, 140, 0)" />
            <stop offset="50%" stopColor="#ddd" />
          </linearGradient>
        </defs>
        <path
          d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.402 8.172L12 18.897l-7.336 3.865 1.402-8.172L.132 9.21l8.2-1.192L12 .587z"
          fill={half ? "url(#halfGrad)" : filled ? "rgb(0, 140, 0)" : "#ddd"}
        />
      </svg>
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "rgb(0, 140, 0)" : "#ddd"}>
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.402 8.172L12 18.897l-7.336 3.865 1.402-8.172L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  )
}







                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
















 