import React from "react";
import inventoryImage from "../../image/inventory.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" bg-teal-800 min-h-screen flex justify-center items-center">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={inventoryImage}
            className="my-8 lg:my-0 max-w-sm lg:max-w-xl"
            alt="Investment"
          />
          <div>
            <h1 className="text-5xl lg:text-6xl text-white font-bold">Inventory & Stock <br /> Management <br /> Solution </h1>
            <p className="py-6 text-white">
             Inventory Managment Solution Provide To Control and Manage Products in The Wirehouse in Real Time and Intgrated to Make it Easier To Develop Your Business.
            </p>
            <Link to="/login" className="btn bg-white">Free Trial 1 Month</Link>
            <div className="flex items-center justify-between mt-5">
              <div className="btnItem flex flex-col">
                <p className="text-white  text-xl font-semibold">14K</p>
                <p className="text-white  text-xl font-semibold">Brand Owners</p>
              </div>
              <div className="btnItem">
                <p className="text-white  text-xl font-semibold">20K</p>
                <p className="text-white  text-xl font-semibold">Active Users</p>
              </div>
              <div className="btnItem">
                <p className="text-white  text-xl font-semibold">320+</p>
                <p className="text-white  text-xl font-semibold">Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
