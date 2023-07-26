import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-500">
        <div className="flex-1">
          <Link
            to="/"
            className=" normal-case text-xl text-white "
          >
            NHInventory
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="navbar-end">
              <Link to="/login" className="btn btn-md">Register</Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
