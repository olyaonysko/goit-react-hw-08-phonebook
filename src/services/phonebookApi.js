import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const fetchContacts = () => {
  return axios.get('/contacts');
};

export const fetchAddContact = contact => {
  return axios.post(`/contacts`, contact);
};

export const fetchDeleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};

export const fetchEditContact = ({ id, name, number }) => {
  const update = {
    name,
    number,
  };
  return axios.patch(`/contacts/${id}`, update);
};

export const fetchSignUp = ({ email, password, name }) => {
  return axios.post('/users/signup', {
    name: name,
    email: email,
    password: password,
  });
};

export const fetchLogIn = ({ email, password }) => {
  return axios.post('/users/login', {
    email: email,
    password: password,
  });
};

export const fetchLogOut = () => {
  return axios.post('/users/logout');
};
