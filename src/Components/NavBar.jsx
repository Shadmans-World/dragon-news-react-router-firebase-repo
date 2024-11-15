import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav flex gap-3 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex items-center gap-3">
        <div>
          <img src={user} alt="user-logo" />
        </div>

        <Link to='/auth/login' className="btn btn-neutral">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
