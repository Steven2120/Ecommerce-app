import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product/Product";
import { fetchProducts as displayProducts } from "../components/Redux/actions/productActions";
import "./HomeScreen.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const fetchProducts = useSelector((state) => state.getProducts);
  const { loading, products, error } = fetchProducts;

  useEffect(() => {
    dispatch(displayProducts());
  }, [displayProducts]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Trending Products</h2>

      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => <Product />)
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
