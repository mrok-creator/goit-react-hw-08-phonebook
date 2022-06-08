import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from 'redux/User/user-operation';
import { isUserLogin } from 'redux/User/user-selectors';

import Section from 'shared/components/Section';
import RegisterForm from 'components/RegisterForm';

// import s from './registerPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(isUserLogin, shallowEqual);
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
