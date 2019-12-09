import React from "react";

export default props => {
  return (
    <div className="single-product">
      <img src={props.product.image} />
      <h2>{props.product.name}</h2>
      <p className="description">{props.product.description}</p>
      <p className="price">${props.product.price}</p>
    </div>
  );
};
