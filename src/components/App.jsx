import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useIsLogin from 'shared/hooks/useIsLogin';
import Routes from './Route';

import { getCurrentUser } from 'redux/User/user-operation';

export const App = () => {
  const dispatch = useDispatch();

  const isLogin = useIsLogin();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes />
    </div>
  );
};
