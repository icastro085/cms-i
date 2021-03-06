import api from './api';

export const all = (type, query) => api.get(`content/${type}`, {
  params: query,
});
export const get = (type, id) => api.get(`content/${type}/${id}`);
export const save = (type, data) => api.post(`content/${type}`, data);
export const update = (type, id, data) => api.put(`content/${type}/${id}`, data);