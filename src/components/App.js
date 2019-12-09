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

  const deleteProduct = index => {
    let updatedProducts = [...products];
    updatedProducts = updatedProducts
      .slice(0, index)
      .concat(updatedProducts.slice(index + 1, updatedProducts.length));
    setProducts(updatedProducts);
  };

  return (
    <Router>
      <div id="app">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
          <Route
            exact
            path="/"
            render={() => (
              <ProductsList products={products} deleteProduct={deleteProduct} />
            )}
          />
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
