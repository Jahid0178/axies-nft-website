import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Images/Home/logo_dark.png";

const Navigation = () => {
  return (
    <div>
      <nav className="flex sm:justify-center space-x-4 md:justify-between items-center px-10 bg-black text-white">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <NavLink className="mr-2" to="/home">
            Home
          </NavLink>
          <NavLink className="mx-2" to="/explore">
            Explore
          </NavLink>
          <NavLink className="mx-2" to="/activity">
            Activity
          </NavLink>
          <NavLink className="mx-2" to="/community">
            Community
          </NavLink>
          <NavLink className="mx-2" to="/pages">
            Pages
          </NavLink>
          <NavLink className="ml-2" to="/contact">
            Contact
          </NavLink>
        </div>
        <div>wallet</div>
      </nav>
    </div>
  );
};

export default Navigation;
