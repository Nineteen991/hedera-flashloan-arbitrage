export type ContextTokens = {
  customPair: TokenPairInfo
  setCustomPair: React.Dispatch<React.SetStateAction<TokenPairInfo>>
}

export type TokenPairInfo = {
  id: string,
  amount: string,
  fromToken: string,
  fromTokenName: string,
  toToken: string,
  toTokenName: string
}