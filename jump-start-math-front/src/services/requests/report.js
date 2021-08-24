import api from '../api';

export const getClassroomReport = (id) =>
  api.request({
    url: `/attempts/${id}`,
    method: 'GET',
  });

export const getUserAttempts = (id) =>
  api.request({
    url: `/userattempts/${id}`,
    method: 'GET'
  });