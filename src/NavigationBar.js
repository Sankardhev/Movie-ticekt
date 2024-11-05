import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { CartContext } from "./Carousel"; // Ensure CartContext is correctly defined and imported
import { useContext } from "react";

export const NavigationBar = ({ handleClick }) => {
  const { count } = useContext(CartContext); // Accessing cart count from context
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" style={{ width: "100px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features">
                Features
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Wrap the cart icon in a button for better accessibility */}
              <button className="btn btn-dark px-4 py-2 text-light fs-5 fw-5 me-3" onClick={() => navigate('/CartDetails')}>
                <i className="bi bi-cart-plus">
                  <span className="bg-danger mb-2 me-1 px-2" style={{ borderRadius: "50%" }}>
                    {count}
                  </span>
                </i>
              </button>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="btn btn-primary me-2 px-4 py-2 text-light fs-5 fw-5"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
