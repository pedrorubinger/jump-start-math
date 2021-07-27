import api from '../api';

export const registerUser = (data) =>
  api.request({
    url: `/users`,
    method: 'POST',
    data
  });

export const signIn = (data) =>
  api.request({
    url: '/sessions',
    method: 'POST',
    data,
  });
