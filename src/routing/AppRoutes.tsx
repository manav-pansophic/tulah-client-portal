import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import Login from "../components/login/Login";

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  const user = false;
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        {/* <Route path="logout" element={<Logout />} /> */}

        {user ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/guests" />} />
          </>
        ) : (
          <>
            <Route
              path="/auth/register"
              element={<div>Register component</div>}
            />
            <Route path="/auth/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
