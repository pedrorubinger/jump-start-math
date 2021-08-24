import api from '../api';

export const sendQuestion = (data) => 
  api.request({
    url: '/questions',
    method: 'POST',
    data
  });

export const sendAttempt = (data) => 
  api.request({
    url: '/attempts',
    method: 'POST',
    data
  });