export interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: Date
  updatedAt: Date
  category: {
    id: number
    name: string
    image: string
    creationAt: Date
    updatedAt: Date
  }
}

export interface FilterData {
  key: string
  data: {
    title: string
    amount: number
  }[]
}
