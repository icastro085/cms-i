import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/',
  timeout: 1000,
  headers: {'Authorization': '1fc62b5132cd3b7ab951f2d7c92bcf78'}
});

export default api;