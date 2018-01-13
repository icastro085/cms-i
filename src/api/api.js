import axios from 'axios';

axios.defaults.crossDomain = true;

const api = axios.create({
  baseURL: 'http://localhost:8081/',
  timeout: 1000,
  headers: {'Authorization': '1fc62b5132cd3b7ab951f2d7c92bcf78'}
});

export default api;