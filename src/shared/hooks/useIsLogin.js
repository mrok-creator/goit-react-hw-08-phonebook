import { useSelector, shallowEqual } from 'react-redux';

import { isUserLogin } from 'redux/User/user-selectors';

const useIsLogin = () => {
  const isLogin = useSelector(isUserLogin, shallowEqual);
  return isLogin;
};

export default useIsLogin;
