import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import RootApp from '../RootApp';


const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {

const user = true;
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<RootApp />}>
          {/* <Route path="logout" element={<Logout />} /> */}
          <Route path="/register" element={<div>Register component</div>} />
          <Route path="/login"  element={<div>Login component</div>}/>
          { user ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/guests" />} />
            </>
          ) : (
            <>
              {/* <Route path="auth/*" element={<AuthPage />} /> */}
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
