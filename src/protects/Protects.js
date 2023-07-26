import { useSelector } from "react-redux";
import { selectIsLooggedIn } from "../redux/features/auth/authSlice";

export const ShowRegister = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLooggedIn);

  if (isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};

export const ShowLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLooggedIn);

  if (!isLoggedIn) {
    return <> {children}</>;
  }
  return null;
};
