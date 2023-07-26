import React from "react";
import Styles from "../../styles/Login.module.css";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiHappyAlt } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { resetPassword } from "../../services/authServices";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { resetToken } = useParams();
  const onSubmit = (data) => {
    const { passwordOne, passwordTwo } = data;

    if (passwordOne.length < 6 || passwordTwo.length < 6) {
      return toast.error("Passwords Must Be Up To 6 Characters");
    }

    if (passwordOne !== passwordTwo) {
      return toast.error("Password Didn't Match");
    }

    try {
      const res = resetPassword(data, resetToken)
      toast.success(res.message)
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className={Styles.bgBackground}>
      <div className=" flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg  shadow-2xl">
          <div className="p-3">
            <h1 className=" flex items-center justify-center mb-1 mr-3">
              <BiHappyAlt size="30" color="#363636" />
            </h1>
            <h2 className="text-3xl text-center font-semibold text-slate-700">
              Reset Password
            </h2>
            <div className="my-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="password"
                  placeholder="Your New Password"
                  className="input mt-3 input-bordered w-full max-w-lg"
                  {...register("passwordOne", { required: true })}
                />
                {errors.passwordOne && (
                  <span className=" text-red-500">Passowrd is required</span>
                )}
                <input
                  type="password"
                  placeholder="Confirm Your New Password"
                  className="input mt-2 input-bordered w-full max-w-lg"
                  {...register("passwordTwo", { required: true })}
                />
                {errors.passwordTwo && (
                  <span className=" text-red-500">Passowrd is required</span>
                )}

                <div className=" mx-2 my-2 flex items-center justify-between">
                  <Link className=" text-teal-800 font-semibold" to="/">
                    Back Home
                  </Link>
                  <Link className=" text-red-500 font-semibold" to="/login">
                    Login
                  </Link>
                </div>
                <input
                  type="submit"
                  className="btn mt-1 w-full max-w-lg bg-teal-800 hover:bg-teal-800 text-white"
                  value="Reset Password"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
