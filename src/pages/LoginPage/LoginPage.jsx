import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from 'redux/User/user-operation';
import useIsLogin from 'shared/hooks/useIsLogin';

import Section from 'shared/components/Section';
import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useIsLogin();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const loginUser = useCallback(
    data => {
      return dispatch(login(data));
    },
    [dispatch]
  );

  return (
    <Section title="You may Login hear if you already got an account">
      <LoginForm onSubmit={loginUser} />
    </Section>
  );
};

export default LoginPage;
