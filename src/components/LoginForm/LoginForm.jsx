import { useState, memo } from 'react';

import PropTypes from 'prop-types';

import s from './loginForm.module.css';

function LoginForm({ onSubmit }) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ email: '', password: '' });
  };
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={s.box}>
      <label htmlFor="email" className={s.text}>
        Email
      </label>
      <input
        type="email"
        value={email}
        name="email"
        id="email"
        placeholder="Enter email"
        className={s.input}
        onChange={handleChange}
      />

      <label htmlFor="password" className={s.text}>
        Password
      </label>
      <input
        type="password"
        value={password}
        name="password"
        id="password"
        placeholder="Enter password"
        className={s.input}
        onChange={handleChange}
      />
      <button className={s.btn}>Log In</button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(LoginForm);
