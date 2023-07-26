import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main/Main";
import Login from "../pages/Login";
import Dashboard from "../layout/Dashboard/Dashboard";
import ProductDashboard from "../pages/Dashboard/ProductDashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import UserProfile from "../pages/Dashboard/UserProfile";
import ContactUs from "../pages/Dashboard/ContactUs";

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
