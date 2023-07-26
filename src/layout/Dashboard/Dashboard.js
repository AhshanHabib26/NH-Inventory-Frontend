import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Main/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pl-2">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-teal-600 text-base-content">
            <li>
              <Link className=" text-white text-lg " to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className=" text-white text-lg " to="add-product">
                Add Product
              </Link>
            </li>
            <li>
              <Link className=" text-white text-lg " to="user-profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className=" text-white text-lg " to="contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
