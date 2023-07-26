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
    console.log(error)
    toast.error(error.response.data.error, { id: "NHInventory" });
  }
};
