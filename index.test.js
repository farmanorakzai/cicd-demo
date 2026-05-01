const request = require('supertest');
const app = require('./index');

test('GET / returns correct message', async () => {
  const r = await request(app).get('/');
  expect(r.status).toBe(200);
  expect(r.body.message).toBe('Hello from CI/CD on AWS!');
});

test('GET /health returns ok', async () => {
  const r = await request(app).get('/health');
  expect(r.status).toBe(200);
  expect(r.body.status).toBe('ok');
});