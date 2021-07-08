import { Collection } from '../../domain/models/collection'
import { Product, ProductCollectionItem } from '../../domain/models/product.model'
import { RelatedProduct } from '../../domain/models/related-product.model'
import { ProductCollectionResponse, ProductResponse, RelatedProductResponse } from '../response-types/product.response'

export function productMapper(json: ProductResponse): Product {
  return {
    id: json.id,
    name: json.name,
    description: json.description,
    price: parseFloat(json.price),
    quantity: json.quantity,
    relatedProducts: json.related_products.map(relatedProductMapper),
    createdAt: new Date(json.created_at),
    updatedAt: new Date(json.updated_at)
  }
}

export function productCollectionItemMapper(json: ProductResponse): ProductCollectionItem {
  return {
    id: json.id,
    name: json.name,
    description: json.description,
    price: parseFloat(json.price),
    quantity: json.quantity
  }
}

export function relatedProductMapper(json: RelatedProductResponse): RelatedProduct {
  return {
    id: json.id,
    name: json.name,
    price: parseFloat(json.price),
    mainProductId: json.main_product_id
  }
}

export function productCollectionMapper(json: ProductCollectionResponse): Collection<ProductCollectionItem> {
  return {
    totalRowCount: json.total_row_count,
    pageSize: json.page_size,
    totalPages: json.total_page,
    currentPage: json.current_pa,
    nextPage: json.next_page,
    prevPage: json.prev_page,
    data: json.data.map(productCollectionItemMapper)
  }
}
