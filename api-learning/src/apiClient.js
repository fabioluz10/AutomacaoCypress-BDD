import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.restful-api.dev',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function getAllObjects() {
  return client.get('/objects');
}

export async function createObject(payload) {
  return client.post('/objects', payload);
}

export async function getObjectById(id) {
  return client.get(`/objects/${id}`);
}

export async function updateObject(id, payload) {
  return client.put(`/objects/${id}`, payload);
}

export async function deleteObject(id) {
  return client.delete(`/objects/${id}`);
}
