import { NavLink, Outlet } from 'react-router-dom';

import s from './layOut.module.css';

const doActive = ({ isActive }) =>
  isActive ? `${s.link} ${s.active}` : `${s.link}`;

const LayOut = () => {
  return (
    <>
      <ul className={s.nav}>
        <li className={s.item}>
          <NavLink to="/" className={doActive}>
            Home
          </NavLink>
        </li>
        {/* <li className={s.item}>
          <NavLink to="/contacts" className={doActive}>
            Contacts
          </NavLink>
        </li> */}
        <li className={s.item}>
          <NavLink to="/register" className={doActive}>
            Register
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/login" className={doActive}>
            Login
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LayOut;
