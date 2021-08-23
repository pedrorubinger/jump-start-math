import api from '../api';

export const sendQuestion = (data) => 
  console.log({
    url: '/questions',
    method: 'POST',
    data
  });

export const sendAttempt = (data) => 
  console.log({
    url: '/attempts',
    method: 'POST',
    data
  });