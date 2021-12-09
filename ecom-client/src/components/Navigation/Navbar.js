import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Ecom Shopping Cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <i className="fas fa-shopping-cart"></i>
          <span>
            Cart
            <span className="cartlogo__badge">(0)</span>
          </span>
        </li>
        <li>
          <Link to="/">Return to Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;