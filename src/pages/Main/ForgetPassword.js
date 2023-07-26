import React from "react";
import Styles from "../../styles/Login.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className={Styles.bgBackground}>
        <div className=" flex items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white rounded-lg  shadow-2xl">
            <div className="p-3">
              <h1 className=" flex items-center justify-center mb-1 mr-3">
                <AiOutlineMail size="30" color="#363636" />
              </h1>
              <h2 className="text-3xl text-center font-semibold text-slate-700">
                Forgot Password
              </h2>
              <div className="my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input mb-2 input-bordered w-full max-w-lg"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                  <div className=" mx-2 my-2 flex items-center justify-between">
                    <Link className=" text-teal-800 font-semibold" to="/">
                      Back Home
                    </Link>
                    <Link
                      className=" text-red-500 font-semibold"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                  <input
                    type="submit"
                    className="btn mt-1 w-full max-w-lg bg-teal-800 hover:bg-teal-800 text-white"
                    value="Get Reset Email"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
