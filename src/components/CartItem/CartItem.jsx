import React from "react";

function CartItem() {
  return (
    <div className="shopping-cart">
      <div className="cart-item">
        <div className="cart-item-top">
          <div className="cart-item-picture">Picture</div>
          <div className="cart-item-name">Name</div>
        </div>
        <div className="cart-item-bottom">
          <div className="cart-item-price">Price</div>
          <div className="cart-item-note">Note</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
