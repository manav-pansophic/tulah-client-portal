import { FC, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import Login from "../components/login/Login";
import VerifyForm from "../components/forms/login/VerifyForm";

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  const user = sessionStorage.getItem("isLoggedIn") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        {/* <Route path="logout" element={<Logout />} /> */}

        {(isLoggedIn || user) ? (
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
            {/* <Route path="/auth/login" element={<Login />} /> */}
            <Route
              path="/auth/login"
              element={
                <VerifyForm
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  isOtpSent={isOtpSent}
                  setIsOtpSent={setIsOtpSent}
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
