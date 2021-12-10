import React from "react";
import CartItem from "../components/CartItem/CartItem";
import "./CartInfoScreen.css";

const CartInfoScreen = () => {
  return (
    <div className="cart__info__screen">
      <div className="cart__info__left">
        <h2>Your Cart</h2>
        <CartItem />
      </div>
      <div className="cart__info__right">
        <div className="info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
      </div>
      <div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default CartInfoScreen;
