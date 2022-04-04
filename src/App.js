import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Login } from "./Views/LogIn/Login";
import { Registration } from "./Views/Registration/Registration-form";
import { PrivateRoute } from "./Components/PrivateRoute";

const Homepage = lazy(() => import("./Views/HomeView/HomeView"));
const Phonebook = lazy(() => import("./Views/Phonebook/Phonebook"));
function App() {
  const NotFound = () => {
    return <h1>NotFound</h1>;
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />

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
