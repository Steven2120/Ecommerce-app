import React from "react";
import "./ProductDetailScreen.css";

const ProductDetailScreen = () => {
  return (
    <div className="detail__screen">
      <div className="details__left">
        <div className="image">
          <img
            src="https://ecom-app-product-images.s3.amazonaws.com/shiba_pillow.jpg"
            alt="shibainu pillow"
          />
        </div>

        <div className="info__left">
          <p className="name__left">Product 1</p>
          <p>Price: $499.99</p>
          <p>
            Description: Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Laborum, porro?
          </p>
        </div>
      </div>

      <div className="details__right">
        <div className="info__right">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
