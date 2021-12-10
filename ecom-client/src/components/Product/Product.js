import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://ecom-app-product-images.s3.amazonaws.com/shiba_pillow.jpg"
        alt="shibainu pillow"
      />
      <div className="product__details">
        <p className="details__name"></p>
        <p className="details__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          amet eligendi deserunt nulla obcaecati voluptate.
        </p>

        <p className="details__price">$300.99</p>
        <Link to={`/product/${1111}`} className="details__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
