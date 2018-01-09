import api from './api';

export const all = type => api.get(`content/${type}`);
//export const get = (type, id) => api.one('content', type, id);
//export const save = type => api.all(`content/${type}`);