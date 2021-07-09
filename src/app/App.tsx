import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Layout from './layout/Layout'
import ProductDetail from './product/ProductDetail'
import ProductList from './product/ProductList'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <ProductList />
          </Route>
          <Route path='/products/:id'>
            <ProductDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
