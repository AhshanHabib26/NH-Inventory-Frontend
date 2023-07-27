import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const createProduct = async (userData) => {
  const res = await axios.post(`${BACKEND_URL}/api/v1/products`, userData);
  return res.data;
};
