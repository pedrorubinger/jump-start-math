import api from '../api';

/**
 * @param {Number} id - User id.
 * @param {Object} data - Object with property classroom (string).
 */
export const signInClass = (data) =>
  api.request({
    url: `/students`,
    method: 'PUT',
    data,
  });
