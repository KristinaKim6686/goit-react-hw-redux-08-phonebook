import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

export const PrivateRoute = ({
  children,
  redirectPath = "/",
  //   ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
};
