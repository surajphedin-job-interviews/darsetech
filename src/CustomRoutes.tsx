import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import RouteGuard from "./RouteGuard";

const CustomRoutes = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setIsAuthorized={setIsAuthorized}></Login>}
      ></Route>
      <Route
        path="/"
        element={
          <RouteGuard
            isAuthorized={isAuthorized}
            element={<Homepage></Homepage>}
          ></RouteGuard>
        }
      ></Route>
    </Routes>
  );
};

export default CustomRoutes;
