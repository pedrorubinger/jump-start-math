import api from '../api';

/**
 * @param {Number} id - User id.
 * @param {Object} data - Object with property classroom (string).
 */
export const signInClass = (id, data) =>
  api.request({
    url: `/user/${id}`,
    method: 'PUT',
    data,
  });
