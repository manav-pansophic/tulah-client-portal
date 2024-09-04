import { Route, Routes, Navigate } from "react-router-dom";
import RootApp from "../RootApp";
import { Registration } from "../screens/Registration";
import { Schedule } from "../screens/Schedule";
import { PafScreen } from "../screens/PafScreen";
import Gnome from "../components/Gnome/Gnome";
import PaymentMainScreen from "../components/payment/PaymentMainScreen";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<RootApp />}>
        <Route path="guests" element={<Registration />} />
        <Route path="assesment" element={<PafScreen />} />
        <Route path="gnome" element={<Gnome />} />
        <Route path="schedule" element={<Schedule />} />

        <Route path="payments" element={<PaymentMainScreen />} />
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/guests" />} />
        {/* Pages */}
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
