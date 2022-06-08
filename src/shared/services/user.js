import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const signup = async data => {
  const { user } = await instance.post('/signup', data);
  return user;
};

export const login = async data => {
  const { user } = await instance.post('/login', data);
  return user;
};

// export const logout = async token => {
//   const { user } = await instance.post('/logout', token);
//   return user;
// };

// export const isCurrent = async token => {
//   const { user } = await instance.get('/current');
//   return user;
// };
