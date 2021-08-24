import api from '../api';

export const registerUser = (data) =>
  api.request({
    url: '/users',
    method: 'POST',
    data
  });

export const updatePassword = (data) =>
  api.request({
    url: '/users',
    method: 'PUT',
    data
  });

export const signIn = (data) =>
  api.request({
    url: '/sessions',
    method: 'POST',
    data,
  });

export const userHasClass = (data) =>
  api.request({
    url: '/students',
    method: 'GET',
    data,
  });