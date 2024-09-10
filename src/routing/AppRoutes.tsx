import { FC, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VerifyForm from "../components/forms/login/VerifyForm";
import { PrivateRoutes } from "./PrivateRoutes";
import LoginForm from "../components/forms/login/LoginForm";
import Register from "../components/forms/register/Register";

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  const user = sessionStorage.getItem("isLoggedIn") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        {/* <Route path="logout" element={<Logout />} /> */}

        {isLoggedIn || user ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/guests" />} />
          </>
        ) : (
          <>
            <Route path="/auth/register" element={<Register />} />
            <Route
              path="/auth/login"
              element={
                <LoginForm
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/auth/verify"
              element={
                <VerifyForm
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />

            <Route path="*" element={<Navigate to="/auth/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
