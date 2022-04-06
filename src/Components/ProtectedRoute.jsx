import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

export const ProtectedRoute = ({
  children,
  redirectPath = "/user-page",
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
  if (isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
