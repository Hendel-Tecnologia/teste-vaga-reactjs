import { useState, useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Collection } from '../../domain/models/collection'
import { ProductCollectionItem } from '../../domain/models/product.model'
import repo from '../../data/repositories/product.repository'

function ProductList() {
  const [productCollection, setProductCollection] = useState<Collection<ProductCollectionItem>>()

  useEffect(() => {
    repo.getProducts().then(setProductCollection)
  }, [])

  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">Listagem de produtos</h1>

      <div className="card shadow mb-4">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%">
              <thead className="card-header py-3">
                <tr>
                  <th style={{ width: '120px' }}>ID</th>
                  <th>Nome</th>
                  <th style={{ width: '200px' }}>Preço</th>
                  <th style={{ width: '200px' }}>Quantidade</th>
                </tr>
                <tr>
                  <th className='py-1'>
                    <Form.Control size='sm' />
                  </th>
                  <th className='py-1'>
                    <Form.Control size='sm' />
                  </th>
                  <th className='py-1'>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Form.Control as='select' size='sm'>
                          {
                            ['=', '<>', '>', '>=', '<', '<='].map((item, index) => (
                              <option value={item} key={index}>{item}</option>
                            ))
                          }
                        </Form.Control>
                      </InputGroup.Prepend>
                      <Form.Control size='sm' />
                    </InputGroup>
                  </th>
                  <th className='py-1'>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Form.Control as='select' size='sm'>
                          {
                            ['=', '<>', '>', '>=', '<', '<='].map((item, index) => (
                              <option value={item} key={index}>{item}</option>
                            ))
                          }
                        </Form.Control>
                      </InputGroup.Prepend>
                      <Form.Control size='sm' />
                    </InputGroup>
                  </th>
                </tr>
              </thead>
              <tbody>
                {productCollection && (
                  productCollection.data.map(product => (
                    <tr>
                      <td>{product.id}</td>
                      <td><Link to={`products/${product.id}`}>{product.name}</Link></td>
                      <td>R$ {product.price.toFixed(2)}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
