import React from "react";
import LoaderImage from "../image/loader.gif";

const Loader = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div>
        <img className=" w-[350px]" src={LoaderImage} alt="Loader....." />
      </div>
    </div>
  );
};

export default Loader;
