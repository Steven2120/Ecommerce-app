import Product from "../components/Product/Product";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Trending Products</h2>

      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomeScreen;
