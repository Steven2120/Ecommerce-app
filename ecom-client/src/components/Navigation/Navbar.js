import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { lightTheme, darkTheme, GlobalStyles } from "../Themes/themes";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import "./Navbar.css";

const Navbar = ({ click, ...props }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="home__header">
          <h2>Ecom Shopping Cart</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link className="cart__link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link className="return__link" to="/">
            <span>Return to Shop</span>
          </Link>
        </li>
        {localStorage.getItem("authToken") ? (
          <li>
            <p className="welcome">
              Welcome {jwt_decode(localStorage.getItem("authToken")).username}
            </p>
            <Link className="logged__in" to="/login">
              <span onClick={logoutHandler}>Logout</span>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link className="logged__out" to="/login">
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link className="register" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
      {props.theme === "light" ? (
        <button className="sun__btn" onClick={() => props.changeTheme("dark")}>
          <CgSun size={40} />
        </button>
      ) : (
        <button
          className="moon__btn"
          onClick={() => props.changeTheme("light")}
        >
          <HiMoon size={40} />
        </button>
      )}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
