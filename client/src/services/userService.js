import axios from 'axios';

import config from '../config';
import authHeader from '../helpers/authHeader';

axios.defaults.baseURL = config.APIHost;

const auth = async (url, payload) => {
  const data = await axios.post(url, { ...payload });

  if (data.data.token) {
    localStorage.setItem(config.StorageKey, JSON.stringify(data.data));
  }
};

const logOut = () => {
  localStorage.removeItem(config.StorageKey);
};

const getUser = async () => {
  const data = await axios.create(authHeader()).get('/auth/me');

  return data;
};

const updateProfile = async (id, payload) => {
  const data = await axios.put(`/user/${id}`, { ...payload });

  return data;
};

export default {
  auth,
  logOut,
  getUser,
  updateProfile,
};
