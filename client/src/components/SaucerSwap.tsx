import { useEffect } from "react"

import getSaucerSwapPrices from "../utils/getSaucerSwapPrices"

export default function SaucerSwap () {
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    getSaucerSwapPrices(signal)

    return () => controller.abort()
  }, [])

  return (
    <div className="saucerSwap-div">
      SaucerSwap Token Prices
    </div>
  )
}