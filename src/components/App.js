import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import '../App.css';

import AddProduct from './AddProduct';
import ProductsList from './ProductsList';
import SingleProduct from './SingleProduct';

const App = () => {
  return (
    <Router>
      <div>
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add Product</Link>
        </aside>

        <main>
          <Route exact path='/' component={ProductsList}></Route>
          <Route path='/add-product' component={AddProduct}></Route>
          <Route path='/product/:slug' component={SingleProduct}></Route>
        </main>
      </div>
    </Router>
  );
};

export default App;
