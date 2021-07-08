export interface ProductResponse {
  id: number
  name: string
  description: string | null
  price: string
  quantity: number
  created_at: string
  updated_at: string
  related_products: RelatedProductResponse[]
}

export interface productCollectionItemResponse {
  id: number
  name: string
  description: string | null
  price: string
  quantity: number
  created_at: string
  updated_at: string
}

export interface RelatedProductResponse {
  id: number
  name: string
  price: string
  main_product_id: number
}

export interface ProductCollectionResponse {
  total_row_count: number
  page_size: number
  total_page: number
  current_pa: number
  next_page: number | null
  prev_page: number | null
  data: ProductResponse[]
}
