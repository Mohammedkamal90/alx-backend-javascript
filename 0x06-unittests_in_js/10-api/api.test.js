const request = require('supertest');
const app = require('./api');

describe('Test the /available_payments endpoint', () => {
  test('It should respond with the correct payment methods', async () => {
    const response = await request(app).get('/available_payments');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});

describe('Test the /login endpoint', () => {
  test('It should welcome the user with the provided username', async () => {
    const username = 'Betty';
    const response = await request(app)
      .post('/login')
      .send({ userName: username })
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(`Welcome ${username}`);
  });
});
