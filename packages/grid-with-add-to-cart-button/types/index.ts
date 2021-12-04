type ProductImage = {
  id: string
  src: string
  alt: string
}

export type Product = {
  id: string
  name: string
  currency: string
  price: number
  salePrice?: number
  flag?: string
  imageUrl: string
  rating: number
  ratingCount: number
  description: string
  images: ProductImage[]
}
