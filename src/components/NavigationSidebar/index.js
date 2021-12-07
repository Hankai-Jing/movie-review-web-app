import React from "react";
import {Link} from 'react-router-dom';

const NavigationSidebar = (
    {
      active = 'home'
    }
) => {
  const isActive = (active, path) => `${active === path ? 'active' : ''}`

  return (
      <>
        <div className="list-group">

          <Link to="/"
                className={`list-group-item d-flex justify-content-around ${isActive(active, 'home')}`}>
            <div className="col-12 col-xl-2 flex-column">
              <i className="fas fa-home"></i>
            </div>
            <div className="d-none d-xl-block col-xl-10 flex-column">
              <span>Home</span>
            </div>
          </Link>

          <Link to="/login" className={`list-group-item d-flex justify-content-around 
              ${active === 'login' ? 'active' : ""}`}>
            <div className="col-12 col-xl-2 flex-column">
              <i className="fas fa-sign-in-alt"></i>
            </div>
            <div className="d-none d-xl-block col-xl-10 flex-column">
              <span>Log in</span>
            </div>
          </Link>

          <Link className={`list-group-item d-flex justify-content-around 
              ${active === "register" ? " active" : ""}`} to="/register">
            <div className="col-12 col-xl-2 flex-column">
              <i className="fas fa-user-plus"></i>
            </div>
            <div className="d-none d-xl-block col-xl-10 flex-column">
              <span>Register</span>
            </div>
          </Link>

          <Link className={`list-group-item d-flex justify-content-around 
              ${active === "profile" ? " active" : ""}`} to="/profile">
            <div className="col-12 col-xl-2 flex-column">
              <i className="fas fa-user"></i>
            </div>
            <div className="d-none d-xl-block col-xl-10 flex-column">
              <span>Profile</span>
            </div>
          </Link>
          <Link className={`list-group-item d-flex justify-content-around 
              ${active === "search" ? " active" : ""}`} to="/search">
            <div className="col-12 col-xl-2 flex-column">
              <i className="fas fa-search"></i>
            </div>
            <div className="d-none d-xl-block col-xl-10 flex-column">
              <span>Search</span>
            </div>
          </Link>
        </div>
      </>

  )
}
export default NavigationSidebar;
