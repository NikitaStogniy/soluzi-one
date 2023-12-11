export interface CaseCardParams {
  image: string
  title: string
  text: string
  isShort: boolean
}

export interface DevelopmentCardParams {
  icon: any
  title: string
  text: string
}

export interface ProductCardParams {
  title: string
  texts: string[]
}

export interface DiscoveryCardParams {
  name: string
  description: string
  coreTeams: string[]
  additionallies: string[]
  teams: string[]
  results: string[]
  hasShowMore: boolean
  hasButton: boolean
}

export interface MenuItemParams {
  title: string
  hash: string
}

export const LOCAL_KEY = 'locale'
