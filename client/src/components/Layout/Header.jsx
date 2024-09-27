import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const searchIconRef = useRef(null);
  const isAuthenticated = useState(false)[0];
  const isAdmin = useState(false)[0]

  const handleClickOutside = (e) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(e.target) &&
      searchIconRef.current &&
      !searchIconRef.current.contains(e.target)
    ) {
      setShowSearch(false);
      console.log("clicked outside");
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
      <nav className="navbar navbar-expand-lg ">
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
        <Link to="/" className="navbar-brand mx-auto ms-5">
          Logo
        </Link>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="navbar-nav">
            <a className="nav-link ms-2" href="#home">
              Home
            </a>
            <a className="nav-link ms-2" href="#about">
              About
            </a>
            <a className="nav-link ms-2" href="#shop">
              Shop
            </a>
            <a className="nav-link ms-2" href="#blog">
              Blog
            </a>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span className="headerCart p-2 m-0">
            <i className="fa-solid fa-cart-shopping"></i> (0)
          </span>
          {!isAuthenticated ? (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle d-flex align-items-center"
                type="button"
                id="dropDownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav me-2 mb-0">
                  <img
                    src="../images/default_avatar.jpg"
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                    // alt="User Avatar"
                  />
                </figure>
                <span className="p-2">User</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {isAdmin && (
                  <li>
                  <a className="dropdown-item" href="/admin/dashboard">
                    Dashboard
                  </a>
                </li>
                )}
                
                <li>
                  <a className="dropdown-item" href="/me/orders">
                    Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/me/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn" id="login_btn">
              <i className="addPadding fa-regular fa-user"></i>
            </Link>
          )}

          <i
            ref={searchIconRef}
            className="addPadding fa-solid fa-magnifying-glass me-5"
            onClick={(e) => {
              console.log("clicked search");
              e.stopPropagation();
              setShowSearch(true);
            }}
          ></i>
        </div>
      </nav>

      {showSearch && (
        <div
          ref={searchContainerRef}
          className="search-container container-fluid m-0 p-0"
        >
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
