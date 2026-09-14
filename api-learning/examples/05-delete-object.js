import { deleteObject } from '../src/apiClient.js';

const id = process.argv[2] || '1';

try {
  const response = await deleteObject(id);
  console.log('Status:', response.status);
  console.log('Resposta:', JSON.stringify(response.data, null, 2));
} catch (error) {
  console.error('Erro ao deletar objeto:', error.message);
  process.exit(1);
}
