import React, { useState, useEffect, useRef } from "react";
import { getImageUrl } from '../../utils';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const isAuthenticated = useState(false)[0]; // Update this line

  const handleClickOutside = (event) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg ms-3">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mx-auto ms-5" href="#">Logo</a>
        
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <div className="navbar-nav mx-auto">
            <a className="nav-link ms-2" href="#home">Home</a>
            <a className="nav-link ms-2" href="#about">About</a>
            <a className="nav-link ms-2" href="#shop">Shop</a>
            <a className="nav-link ms-2" href="#blog">Blog</a>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span className="headerCart p-2 m-0">
            <i className="fa-solid fa-cart-shopping"></i> (0)
          </span>

          {isAuthenticated ? (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropDownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav me-2 g-0">
                  <img
                    src="../images/default_avatar.jpg"
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  />
                </figure>
                <span className="p-2">User</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                <li><a className="dropdown-item" href="/admin/dashboard">Dashboard</a></li>
                <li><a className="dropdown-item" href="/me/orders">Orders</a></li>
                <li><a className="dropdown-item" href="/me/profile">Profile</a></li>
                <li><a className="dropdown-item text-danger" href="/">Logout</a></li>
              </ul>
            </div>
          ) : (
            <a href="/login" className="btn" id="login_btn">
              <i className="addPadding fa-regular fa-user"></i>
            </a>
          )}

          <i
            className="addPadding fa-solid fa-magnifying-glass me-5" // Add margin end here
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from bubbling up
              setShowSearch(true);
            }}
          ></i>
        </div>
      </nav>

      {showSearch && (
        <div ref={searchContainerRef} className="search-container container-fluid m-0 p-0">
          <div className="row">
            <div className="col-12">
              <form className="search my-2" action="" method="get">
                <div className="input-group">
                  <button id="search_btn" className="btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                  <input
                    type="text"
                    id="search_field"
                    aria-describedby="search_btn"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                    name="keyword"
                    value=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
