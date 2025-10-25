import React from 'react';
import "../assets/style.css";
import "../assets/bootstrap.min.css";


const Header = () => {
    const logout = async (e) => {
    e.preventDefault();
    let logout_url = window.location.origin+"/djangoapp/logout";
    const res = await fetch(logout_url, {
      method: "GET",
    });
 
    const json = await res.json();
    if (json) {
      let username = sessionStorage.getItem('username');
      sessionStorage.removeItem('username');
      window.location.href = window.location.origin;
      window.location.reload();
      alert("Logging out "+username+"...")
    }
    else {
      alert("The user could not be logged out.")
    }
  };
   
let home_page_items = <div className="auth-panel">
  <a className="auth-link" href="/login">Login</a>
  <a className="auth-link" href="/register">Register</a>
</div>


let curr_user = sessionStorage.getItem('username')


if ( curr_user !== null &&  curr_user !== "") {
    home_page_items = <div className="input_panel">
      <span className='username'>{sessionStorage.getItem("username")}</span>
      <a className="nav_item logout-link" href="/djangoapp/logout" onClick={logout}>Logout</a>
    </div>
}
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
            <div className="container-fluid">
              <h2 className="navbar-brand-title">Dealerships</h2>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link custom-nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-nav-link" href="/about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-nav-link" href="/contact">Contact Us</a>
                  </li>
                </ul>
                <span className="navbar-text">
                  {home_page_items}
                </span>
              </div>
            </div>
          </nav>
        </div>
    )
}


export default Header
