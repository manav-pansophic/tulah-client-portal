import { Route, Routes, Navigate } from "react-router-dom";
import RootApp from "../RootApp";
import { Registration } from "../screens/Registration";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<RootApp />}>
        <Route path="guests" element={<Registration />} />
        <Route path="assesment" element={<>asssement</>} />
        <Route path="gnome" element={<>gnome</>} />
        <Route path="schedule" element={<>echu</>} />
        <Route path="payments" element={<></>} />
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/guests" />} />
        {/* Pages */}
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
