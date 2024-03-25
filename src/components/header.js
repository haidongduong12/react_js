// import { useRouteError } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../themes/fruitables-1.0.0/lib/lightbox/css/lightbox.min.css";
import "../themes/fruitables-1.0.0/lib/owlcarousel/assets/owl.carousel.min.css";
import "../themes/fruitables-1.0.0/css/bootstrap.min.css";
import "../themes/fruitables-1.0.0/css/style.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // Nếu có thông tin người dùng trong localStorage, cập nhật state
      setUser(JSON.parse(loggedInUser));
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location = "/login";
  };
  return (
    <div>
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  123 Street, New York
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  Email@Example.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to={"/"} className="nav-item nav-link active">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link to={"/"} className="nav-item nav-link active">
                  Home
                </Link>
                <a href="shop.html" className="nav-item nav-link">
                  Shop
                </a>
                <a href="shop-detail.html" className="nav-item nav-link">
                  Shop Detail
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="cart.html" className="dropdown-item">
                      Cart
                    </a>
                    <a href="chackout.html" className="dropdown-item">
                      Chackout
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <div className="d-flex m-3 me-0">
                {/* <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary"></i>
                </button> */}
                <a href="#" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{
                      top: "-5px",
                      left: "15px",
                      height: "20px",
                      minWidth: "20px",
                    }}
                  >
                    3
                  </span>
                </a>
                {user && user.username ? (
                  <Link to={"/login"} className="my-auto nav-item dropdown">
                    <i
                      className="fas fa-user fa-2x"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Hi {user.username}
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                      {user.role === 1 && ( // Kiểm tra nếu role của người dùng là 0
                        <Link to={"/dashboard"} className="dropdown-item">
                          Dashboard
                        </Link>
                      )}
                      <a href="chackout.html" className="dropdown-item">
                        Info
                      </a>
                      <button onClick={handleLogout} className="dropdown-item">
                        Log out
                      </button>
                    </div>
                  </Link>
                ) : (
                  <Link to={"/login"} className="my-auto nav-item dropdown">
                    <i className="fas fa-user fa-2x"></i> Welcome
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                      <Link to={"/login"} className="dropdown-item">
                        Login
                      </Link>
                      <Link to={"/register"} className="dropdown-item">
                        Register
                      </Link>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
