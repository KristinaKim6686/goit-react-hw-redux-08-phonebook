import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { authOperations } from "./redux/auth";
import { PrivateRoute } from "./Components/PrivateRoute";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Layout } from "./Components/Layout/Layout";
import { Login } from "./Views/LogIn/Login";
import { Registration } from "./Views/Registration/Registration-form";

const Homepage = lazy(() => import("./Views/HomeView/HomeView"));
const Phonebook = lazy(() => import("./Views/Phonebook/Phonebook"));
const UserView = lazy(() => import("./Views/UserView"));

function App() {
  const NotFound = () => {
    return <h1>NotFound</h1>;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route
            path="login"
            element={
              <ProtectedRoute path="/login">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="registration"
            element={
              <ProtectedRoute path="/registration">
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route
            path="user-page"
            element={
              <PrivateRoute path="/user-page">
                <UserView />
              </PrivateRoute>
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute path="/phonebook">
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </Suspense>
  );
}

export default App;
