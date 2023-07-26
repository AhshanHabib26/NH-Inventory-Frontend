import axios from "axios";
import { toast } from "react-hot-toast";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/user/register`,
      userData
    );
    if (res.statusText === "OK") {
      toast.success("Account Create Successfully", { id: "NHInventory" });
    }
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error, { id: "NHInventory" });
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/v1/user/login`, userData);
    if (res.statusText === "OK") {
      toast.success("Welcome NHInventory App Solution", { id: "NHInventory" });
    }
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error, { id: "NHInventory" });
  }
};

export const logOutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/v1/user/logout`);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error, { id: "NHInventory" });
  }
};
