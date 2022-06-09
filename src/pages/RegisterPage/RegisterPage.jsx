import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from 'redux/User/user-operation';
import useIsLogin from 'shared/hooks/useIsLogin';

import Section from 'shared/components/Section';
import RegisterForm from 'components/RegisterForm';

// import s from './registerPage.module.css';

const RegisterPage = () => {
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
      return dispatch(signup(data));
    },
    [dispatch]
  );

  return (
    <Section title="Enter your details to SignUp">
      <RegisterForm onSubmit={loginUser} />
    </Section>
  );
};

export default RegisterPage;
