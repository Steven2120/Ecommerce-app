import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="item">
      <div className="item__image">
        <Link to={`/product/${1111}`}>
          <img
            src="https://ecom-app-product-images.s3.amazonaws.com/shiba_pillow.jpg"
            alt="shibainu pillow"
          />
        </Link>
      </div>

      <Link to={`/product/${1111}`} className="item__name">
        <p>Product 1</p>
      </Link>

      <p className="item__price">$499.99</p>
      <select className="item__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="delete__item__button">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;