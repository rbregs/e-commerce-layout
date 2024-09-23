export default function Header() {
  return (
    <div className="navbar row">
      <div className="col-3 ms-5">Logo</div>
      <div className="col-5 ">
        <div className="d-flex align-items-center ">
          <span className="ms-5 p-2">Home</span>
          <span className="ms-5 p-2">About</span>
          <span className="ms-5 p-2">Shop</span>
          <span className="ms-5 p-2">Blog</span>
        </div>
      </div>
      {/* <div className="col-1 border">Searchbutton</div> */}
      <div className="col-3 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <div className="p">
          <span className="p-2 m-0"><i class="fa-solid fa-cart-shopping"></i> (0)</span>
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
                //   alt="User Avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px" }}
              />
            </figure>
            <span className="p-2">User</span>
          </button>
          <div
            className="dropdown-menu w-100"
            aria-labelledby="dropDownMenuButton"
          >
            <a className="dropdown-item" href="/admin/dashboard">
              {" "}
              Dashboard{" "}
            </a>
            <a className="dropdown-item" href="/me/orders">
              {" "}
              Orders{" "}
            </a>
            <a className="dropdown-item" href="/me/profile">
              {" "}
              Profile{" "}
            </a>
            <a className="dropdown-item text-danger" href="/">
              {" "}
              Logout{" "}
            </a>
          </div>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <a href="/login" className="btn" id="login_btn">
          <div className="">
            <i className="addPadding fa-regular fa-user  "></i>
          </div>
          </a>
        </div>
        <div><i className=" addPadding fa-solid fa-magnifying-glass"></i></div>
      </div>
    </div>
  );
}
