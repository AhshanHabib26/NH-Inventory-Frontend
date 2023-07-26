import React, { useState } from "react";
import Styles from "../../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/authServices";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import Loader from "../../Loader/Loader";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const resData = await loginUser(data);
      await dispatch(SET_LOGIN(true));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className={Styles.bgBackground}>
      {isLoading && <Loader />}
      <div className=" flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg  shadow-2xl">
          <div className="p-3">
            <h1 className=" flex items-center justify-center mb-1 mr-3">
              <FiLogIn size="30" color="#363636" />
            </h1>
            <h2 className="text-3xl text-center font-semibold text-slate-700">
              Login
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

                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input mt-3 input-bordered w-full max-w-lg"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className=" text-red-500">Passowrd is required</span>
                )}
                <div className=" mx-2 my-3 flex items-center justify-between">
                  <Link className=" text-teal-800 font-semibold" to="/signup">
                    Create an Account?
                  </Link>
                  <Link
                    className=" text-red-500 font-semibold"
                    to="/forget-password"
                  >
                    Forget Password?
                  </Link>
                </div>
                <input
                  type="submit"
                  className="btn mt-1 w-full max-w-lg bg-teal-800 hover:bg-teal-800 text-white"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
