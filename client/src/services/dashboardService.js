import axios from 'axios';

import config from '../config';
import authHeader from '../helpers/authHeader';

axios.defaults.baseURL = config.APIHost;
const header = authHeader();

// const fetchDashboard = userID => axios.get(`/byUser/${userID}`).then(({ data }) => data);
const fetchDashboard = async () => {
  const data = await axios.create(header).get('/');

  return data;
};

const fetchTask = async (id) => {
  const data = await axios.create(header).get(`/${id}`);

  return data;
};

const addTask = async (payload) => {
  const data = await axios.create(header).post('/', { ...payload });

  return data;
};

const updateTask = async (id, payload) => {
  const data = await axios.create(header).put(`/${id}`, { ...payload });

  return data;
};

const deleteTask = async (id) => {
  const data = await axios.create(header).delete(`/${id}`);

  return data;
};

export default {
  fetchDashboard,
  fetchTask,
  addTask,
  updateTask,
  deleteTask,
};
