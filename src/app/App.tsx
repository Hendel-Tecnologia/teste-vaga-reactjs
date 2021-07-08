import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Collection } from '../domain/models/collection'
import { ProductCollectionItem } from '../domain/models/product.model'
import repo from '../data/repositories/product.repository'
import { Container, Navbar, Table } from 'react-bootstrap'

function App() {
  const [productCollection, setProductCollection] = useState<Collection<ProductCollectionItem>>()

  useEffect(() => {
    repo.getProducts().then(setProductCollection)
  }, [])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#dashboard">
            Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="p-3">
        <div>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {productCollection && (
                productCollection.data.map(product => (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}

export default App
