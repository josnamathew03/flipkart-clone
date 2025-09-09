import { useState } from "react"
import { productType } from "../../types/productType"

const useSort = () => {
    const [lowtohigh, setLowtohigh] = useState(false)
    
  return {lowtohigh, setLowtohigh}
}

export default useSort
