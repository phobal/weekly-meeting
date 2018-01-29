import request from '../utils/request';

const { prefix, add, remove, list, update } = require('../meta').default;

export function Add(data) {
  // const url = 'http://localhost:3000/add';
  const { path, method } = add;
  const url = `${prefix}${path}`;
  return request(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function List() {
  const { path, method } = list;
  const url = `${prefix}${path}`;
  return request(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function Remove(id) {
  const { path, method } = remove;
  const url = `${prefix}${path}?id=${id}`;
  return request(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function Update(data) {
  const { path, method } = update;
  const url = `${prefix}${path}`;
  return request(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
