import { prefix, add, remove, list, update } from '../meta';
import request from '../utils/request';

export function Add(data) {
  const url = 'http://localhost:3000/add';
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function List() {
  // const { path, method } = add;
  // const url = `${prefix}{path}`;
  const url = 'http://localhost:3000/list';
  return request(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function Remove(id) {
  const url = `http://localhost:3000/remove?id=${id}`;
  return request(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function Update(data) {
  const url = 'http://localhost:3000/update';
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
