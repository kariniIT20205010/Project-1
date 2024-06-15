import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const signup = async (username, password) => {
  return axios.post(API_URL + 'signup', { username, password });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'login', { username, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  signup,
  login,
  logout,
};
