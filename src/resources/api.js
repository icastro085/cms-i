// import restful, { fetchBackend } from 'restful.js';
// export const api = restful('http://localhost', fetchBackend(fetch));

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


export default api;