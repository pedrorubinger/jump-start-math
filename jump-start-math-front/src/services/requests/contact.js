import api from '../api';

export const sendContactEmail = (data) =>
  api.request({
    url: '/contact',
    method: 'POST',
    data,
  });
