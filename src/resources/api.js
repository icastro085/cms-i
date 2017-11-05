import restful, { fetchBackend } from 'restful.js';
export const api = restful('http://localhost', fetchBackend(fetch));
