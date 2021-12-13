import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="home__header">
          <h2>Ecom Shopping Cart</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Return to Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
