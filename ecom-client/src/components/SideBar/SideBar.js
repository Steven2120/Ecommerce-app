import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ show, click }) => {
  const sideBarClass = ["sidebar"];

  if (show) {
    sideBarClass.push("show");
  }

  return (
    <div className={sideBarClass.join(" ")}>
      <ul className="sidebar__links" onClick={click}>
        <li>
          <Link to="/cart">
            <span>
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart
                <span className="sidebar__cartbadge">(0)</span>
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Continue to shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
