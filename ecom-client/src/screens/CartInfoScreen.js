import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import "./CartInfoScreen.css";

const CartInfoScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="cart__info__screen">
      <div className="cart__info__left">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty__message">
            Your cart is empty <Link to="/">Continue To Shop</Link>
          </div>
        ) : (
          cartItems.map((i) => <CartItem />)
        )}
      </div>
      <div className="cart__info__right">
        <div className="info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartInfoScreen;
