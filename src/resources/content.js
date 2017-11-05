import { api } from './api';

export const all = type => api.all(`content/${type}/index.json`);
export const get = (type, id) => api.all('content', type, id);