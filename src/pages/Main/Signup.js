import React from "react";
import Styles from "../../styles/Login.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={Styles.bgBackground}>
      <div className=" flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg  shadow-2xl">
          <div className="p-3">
            <h1 className=" flex items-center justify-center mb-1 mr-3">
              <BiUser size="30" color="#363636" />
            </h1>
            <h2 className="text-3xl text-center font-semibold text-slate-700">
              Sign Up
            </h2>
            <div className="my-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full max-w-lg"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input mt-3 input-bordered w-full max-w-lg"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}

                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full mt-3 max-w-lg"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-red-500">Passowrd is required</span>
                )}
                <div className=" mx-2 my-3 flex items-center justify-end">
                  <p className=" text-md text-slate-500 font-semibold mr-1">Already Have An Account? </p>
                  <Link
                    className=" text-tale-800 font-semibold"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
                <input
                  type="submit"
                  className="btn mt-1 w-full max-w-lg bg-teal-800 hover:bg-teal-800 text-white"
                  value="Sign Up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
