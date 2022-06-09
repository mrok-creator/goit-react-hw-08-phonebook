import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import PrivateRoutes from 'shared/components/Routes/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'shared/components/Routes/PublicRoutes';

const LayOut = lazy(() => import('./LayOut'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const NavigationRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoutes />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationRoutes;
