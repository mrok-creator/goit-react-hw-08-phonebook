import { NavLink, Outlet } from 'react-router-dom';

import useIsLogin from 'shared/hooks/useIsLogin';

import UserMenu from 'components/UserMenu';
import s from './layOut.module.css';

const doActive = ({ isActive }) =>
  isActive ? `${s.link} ${s.active}` : `${s.link}`;

const LayOut = () => {
  const isLogin = useIsLogin();
  return (
    <>
      <div className={s.box}>
        <ul className={s.nav}>
          <li className={s.item}>
            <NavLink to="/" className={doActive}>
              Home
            </NavLink>
          </li>
          <li className={isLogin ? `${s.item}` : `${s.private}`}>
            <NavLink to="/contacts" className={doActive}>
              Contacts
            </NavLink>
          </li>
        </ul>
        {!isLogin && (
          <div>
            <ul className={s.nav}>
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
          </div>
        )}
        {isLogin && <UserMenu />}
      </div>
      <Outlet />
    </>
  );
};

export default LayOut;
