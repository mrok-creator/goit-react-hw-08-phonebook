import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from './Route';

import { getCurrentUser } from 'redux/User/user-operation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes />
    </div>
  );
};
