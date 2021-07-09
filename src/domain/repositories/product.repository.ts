import { Collection } from '../models/collection'
import { Product, ProductCollectionItem } from '../models/product.model'
import { RelatedProduct } from '../models/related-product.model'

export interface ProductRepositoty {
  // TODO: getProducts deverá permitir receber parametros de paginação e filtro
  getProducts(): Promise<Collection<ProductCollectionItem>>
  getProduct(id: number): Promise<Product>
  updateProduct(id: number, attributes: Record<string, any>): Promise<Product>
  createProduct(attributes: Record<string, any>): Promise<Product>
  deleteProduct(id: number): Promise<void>
  addRelatedProduct(productId: number, relatedProductId: number): Promise<RelatedProduct>
  removeRelatedProduct(productId: number, relatedProductId: number): Promise<void>
}
