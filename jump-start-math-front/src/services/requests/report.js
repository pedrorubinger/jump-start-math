import api from '../api';

export const getClassroomReport = (id) =>
  api.request({
    url: `/attempts/${id}`,
    method: 'GET',
  });
