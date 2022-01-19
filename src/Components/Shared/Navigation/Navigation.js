import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Images/Home/logo_dark.png";

const Navigation = () => {
  return (
    <div>
      <nav className="flex sm:justify-center space-x-4 md:justify-between items-center px-10 bg-black text-white py-3">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <NavLink className="mr-2 font-medium" to="/home">
            Home
          </NavLink>
          <NavLink className="mx-2 font-medium" to="/explore">
            Explore
          </NavLink>
          <NavLink className="mx-2 font-medium" to="/activity">
            Activity
          </NavLink>
          <NavLink className="mx-2 font-medium" to="/community">
            Community
          </NavLink>
          <NavLink className="mx-2 font-medium" to="/pages">
            Pages
          </NavLink>
          <NavLink className="ml-2 font-medium" to="/contact">
            Contact
          </NavLink>
        </div>
        <div>
          <button className="wallet-btn font-medium mr-3">
            <i class="fas fa-wallet"></i> Wallet connect
          </button>
          <button className="mx-3 px-2 mode-btn">
            <i class="fas fa-sun"></i>
          </button>
          <button className="mx-3 px-2 mode-btn">
            <i class="fas fa-moon"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
