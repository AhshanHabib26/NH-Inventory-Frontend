import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-teal-700 lg:px-16 md:px-8 px-3">
        <div className="flex-1">
          <Link to="/" className=" normal-case text-xl text-white ">
            NHInventory
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="navbar-end">
              <Link to="/login" className="btn  btn-md">
                Register
              </Link>
            </div>
          </ul>
        </div>

        <label
          htmlFor="my-dashboard"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Dashboard
        </label>
      </div>
    </div>
  );
};

export default Navbar;
