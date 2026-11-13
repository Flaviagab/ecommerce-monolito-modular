import request from 'supertest';
import { app } from '../src/app';

describe('GET /health', () => {
  it('deve retornar status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
