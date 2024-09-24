import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const searchContainerRef = useRef(null);

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
      <div className="navbar row">
        <div className="col-3 ms-5">Logo</div>
        <div className="col-5 ">
          <div className="col-5">
            <div className="links d-flex align-items-center">
              <a href="#home" className="ms-5 text-decoration-none">Home</a>
              <a href="#about" className="ms-5 text-decoration-none">About</a>
              <a href="#shop" className="ms-5 text-decoration-none">Shop</a>
              <a href="#blog" className="ms-5 text-decoration-none">Blog</a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center">
            <div className="p">
              <span className="p-2 m-0">
                <i className="fa-solid fa-cart-shopping"></i> (0)
              </span>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle d-flex align-items-center"
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
            <div className="dropdown-menu w-100" aria-labelledby="dropDownMenuButton">
              <a className="dropdown-item" href="/admin/dashboard">Dashboard</a>
              <a className="dropdown-item" href="/me/orders">Orders</a>
              <a className="dropdown-item" href="/me/profile">Profile</a>
              <a className="dropdown-item text-danger" href="/">Logout</a>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <a href="/login" className="btn" id="login_btn">
              <div>
                <i className="addPadding fa-regular fa-user"></i>
              </div>
            </a>
          </div>
          <div>
            <i
              className="addPadding fa-solid fa-magnifying-glass"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from bubbling up
                setShowSearch(true);
              }}
            ></i>
          </div>
        </div>
      </div>

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
