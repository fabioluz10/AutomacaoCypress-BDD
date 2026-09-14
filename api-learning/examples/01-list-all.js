import { getAllObjects } from '../src/apiClient.js';

try {
  const response = await getAllObjects();
  console.log('Status:', response.status);
  console.log('Quantidade de objetos:', response.data.length);
  console.log(JSON.stringify(response.data.slice(0, 3), null, 2));
} catch (error) {
  console.error('Erro ao listar objetos:', error.message);
  process.exit(1);
}
