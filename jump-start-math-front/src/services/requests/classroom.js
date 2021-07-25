import api from '../api';

export const fetchClassroomsByTeacherId = (teacher_id) =>
  api.request({
    url: `/classroom/teacher/${teacher_id}`,
    method: 'GET',
  });

export const archiveClassroom = (code, data) =>
  api.request({
    url: `/classroom/${code}`,
    method: 'PUT',
    data,
  });

export const storeClassroom = (data) =>
  api.request({
    url: '/classroom',
    method: 'POST',
    data,
  });
