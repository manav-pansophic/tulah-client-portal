import { Route, Routes, Navigate } from 'react-router-dom';
import { MasterLayout } from '../layout/MasterLayout';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="guests" element={<></>}  />
        <Route path="assesment" element={<></>}  />
        <Route path="gnome" element={<></>}  />
        <Route path="schedule" element={<></>}  />
        <Route path="payments" element={<></>}  />
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
