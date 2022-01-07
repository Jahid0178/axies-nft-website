import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="flex sm:justify-center space-x-4">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
