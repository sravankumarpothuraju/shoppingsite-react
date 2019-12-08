import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "../App.css";

import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";
import SingleProduct from "./SingleProduct";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = product => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <div id="app">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
          <Route exact path="/" component={ProductsList} />
          <Route
            path="/add-product"
            render={({ history }) => (
              <AddProduct addProduct={addProduct} history={history} />
            )}
          />
          <Route path="/product/:slug" component={SingleProduct} />
        </main>
      </div>
    </Router>
  );
};

export default App;
