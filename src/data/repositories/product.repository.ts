import { Collection } from '../../domain/models/collection'
import { Product, ProductCollectionItem } from '../../domain/models/product.model'
import { RelatedProduct } from '../../domain/models/related-product.model'
import { ProductRepositoty } from '../../domain/repositories/product.repository'
import { httpClient } from '../config/http-client'
import { productCollectionMapper } from '../mappers/product.mapper'

export class IProductDepository implements ProductRepositoty {
  async getProducts(): Promise<Collection<ProductCollectionItem>> {
    const response = await httpClient.get('products')
    return productCollectionMapper(response.data)
  }

  getProduct(id: number): Promise<Product> {
    throw new Error('Method not implemented.')
  }
  updateProduct(id: number, attributes: Record<string, any>): Promise<Product> {
    throw new Error('Method not implemented.')
  }
  createProduct(attributes: Record<string, any>): Promise<Product> {
    throw new Error('Method not implemented.')
  }
  deleteProduct(id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
  addRelatedProduct(productId: number, relatedProductId: number): Promise<RelatedProduct> {
    throw new Error('Method not implemented.')
  }
  removeRelatedProduct(productId: number, relatedProductId: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

export default new IProductDepository()
