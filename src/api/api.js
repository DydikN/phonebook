import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signUp = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setAuthHeader(result.token);

  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setAuthHeader(result.token);

  return result;
};

export const getCurrent = async token => {
  try {
    setAuthHeader(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setAuthHeader();
  }
};

export const logOut = async () => {
  const { data } = await instance.post('/users/logout');
  setAuthHeader();
  return data;
};

export default instance;
