import { useState, memo } from 'react';

import PropTypes from 'prop-types';

import s from './registerForm.module.css';

function RegisterForm({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
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
    setState({ name: '', email: '', password: '' });
  };
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={s.box}>
      <label htmlFor="name" className={s.text}>
        Name
      </label>
      <input
        type="text"
        value={name}
        name="name"
        id="name"
        placeholder="Enter Name"
        className={s.input}
        onChange={handleChange}
      />

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
      <button className={s.btn}>Sign Up</button>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(RegisterForm);
