import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../services/authServices";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import { ShowLogout, ShowRegister } from "../../protects/Protects";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    logOutUser();
    dispatch(SET_LOGIN(false));
    navigate("/");
  };

  return (
    <div>
      <div className="navbar py-0  bg-teal-700 lg:px-16 md:px-8 px-3">
        <div className="flex-1">
          <Link to="/" className=" normal-case text-xl text-white ">
            NHInventory
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="navbar-end">
              <ShowRegister>
                <button
                  onClick={logOutHandler}
                  className="btn border-0 text-white hover:bg-red-500  bg-red-600 btn-md"
                >
                  Logout
                </button>
              </ShowRegister>
              <ShowLogout>
                <Link to="/signup" className="btn  btn-md">
                  Register
                </Link>
              </ShowLogout>
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
