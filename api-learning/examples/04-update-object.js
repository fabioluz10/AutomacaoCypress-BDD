import { updateObject } from '../src/apiClient.js';

const id = process.argv[2] || '1';
const payload = {
  name: 'Updated Learning Object',
  data: {
    year: 2026,
    price: 149.99,
    color: '#00ff00'
  }
};

try {
  const response = await updateObject(id, payload);
  console.log('Status:', response.status);
  console.log('Objeto atualizado:', JSON.stringify(response.data, null, 2));
} catch (error) {
  console.error('Erro ao atualizar objeto:', error.message);
  process.exit(1);
}
