import { createObject } from '../src/apiClient.js';

const payload = {
  name: 'Learning API Object',
  data: {
    year: 2026,
    price: 99.99,
    color: '#ff0000'
  }
};

try {
  const response = await createObject(payload);
  console.log('Status:', response.status);
  console.log('Objeto criado:', JSON.stringify(response.data, null, 2));
} catch (error) {
  console.error('Erro ao criar objeto:', error.message);
  process.exit(1);
}
