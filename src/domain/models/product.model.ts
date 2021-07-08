import { RelatedProduct } from "./related-product.model";

export interface Product {
  id: number
  name: string
  description: string | null
  price: number
  quantity: number
  relatedProducts: RelatedProduct[]
  createdAt: Date
  updatedAt: Date
}

export interface ProductCollectionItem {
  id: number
  name: string
  description: string | null
  price: number
  quantity: number
}