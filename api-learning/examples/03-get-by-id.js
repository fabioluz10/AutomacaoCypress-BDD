import { getObjectById } from '../src/apiClient.js';

const id = process.argv[2] || '1';

try {
  const response = await getObjectById(id);
  console.log('Status:', response.status);
  console.log('Objeto encontrado:', JSON.stringify(response.data, null, 2));
} catch (error) {
  console.error('Erro ao buscar objeto:', error.message);
  process.exit(1);
}
