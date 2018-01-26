import getAPI from './utils/getApi';

export default {
  prefix: getAPI(),

  add: {
    path: '/add',
    method: 'POST',
  },

  list: {
    path: '/list',
    method: 'GET'
  },

  remove: {
    path: '/remove',
    method: 'DELETE',
  },

  update: {
    path: '/update',
    method: 'POST',
  }
}