export default async function getSaucerSwapPrices(signal: AbortSignal) {
  const saucerSwapTestnetAPI = "https://test-api.saucerswap.finance"

  const res = await fetch(`${ saucerSwapTestnetAPI }/tokens`, { signal })
  const data = await res.json()
  console.log(data)
}