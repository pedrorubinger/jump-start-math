const request = require('supertest');
const app = require('../server');

describe('Test contact route', () => {
  it('should sends an email', async () => {
    const res = await request(app)
      .post('/contact')
      .send({
        name: 'João da Silva',
        school: 'Escola Municipal ABC',
        email: 'joao@test.com',
        message: 'Este é um email de teste.',
      });

    expect(res.body).toHaveProperty(
      'message',
      'Um email foi enviado para nossa equipe!'
    );
  })
});
