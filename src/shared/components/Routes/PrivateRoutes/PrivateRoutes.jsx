import { Navigate, Outlet } from 'react-router-dom';

import useIsLogin from 'shared/hooks/useIsLogin';

const PrivateRoutes = () => {
  const isLogin = useIsLogin();

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
