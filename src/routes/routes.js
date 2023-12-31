import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductDashboard from "../pages/Dashboard/ProductDashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import UserProfile from "../pages/Dashboard/UserProfile";
import ContactUs from "../pages/Dashboard/ContactUs";
import Home from "../pages/Main/Home";
import Login from "../pages/Main/Login";
import Signup from "../pages/Main/Signup";
import ForgetPassword from "../pages/Main/ForgetPassword";
import ResetPassword from "../pages/Main/ResetPassword";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password/:resetToken",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductDashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default routes;
