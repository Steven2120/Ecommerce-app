import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="item">
      <div className="item__image">
        <img
          src="https://ecom-app-product-images.s3.amazonaws.com/shiba_pillow.jpg"
          alt="shibainu pillow"
        />
      </div>

      <Link to={`/product/${1111}`} className="item__name">
        <p>Product 1</p>
      </Link>

      <p className="item__price">$499.99</p>
    </div>
  );
};

export default CartItem;
