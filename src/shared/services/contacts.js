import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/users',
});

export const getContacts = async token => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async (token, data) => {
  const { data } = await instance.post('/contacts', data);
  return data;
};
export const removeContact = async (token, id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data.id;
};