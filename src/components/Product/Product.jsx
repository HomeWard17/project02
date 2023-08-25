import React from "react";
import "./Product.css";

function Product(props) {
  console.log("đây là props đã truyền vào Product", props);
  const { id, picture, name, price } = { ...props };
  return (
    <div className="product">
      <div className="picture">
        <img src={picture} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="price">$ {price}</div>
      <div className="button">
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
