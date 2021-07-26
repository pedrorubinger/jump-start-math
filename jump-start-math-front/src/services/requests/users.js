import api from '../api';

export const registerUser = (data) =>
  api.request({
    url: `/users`,
    method: 'POST',
    data
  });
