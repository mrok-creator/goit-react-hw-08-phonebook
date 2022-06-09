import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUser } from 'redux/User/user-selectors';
import { logout } from 'redux/User/user-operation';
import s from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser, shallowEqual);

  const userLogout = () => {
    return dispatch(logout());
  };

  return (
    <>
      <ul className={s.nav}>
        <li className={s.item}>
          <p className={s.text}> {name}</p>
        </li>
        <li className={s.item}>
          <button type="button " className={s.btn} onClick={userLogout}>
            Log out
          </button>
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
