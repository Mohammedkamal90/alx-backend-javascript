const request = require('supertest');
const app = require('./api');

describe('GET /available_payments', () => {
  it('responds with JSON containing available payment methods', (done) => {
    request(app)
      .get('/available_payments')
      .expect('Content-Type', /json/)
      .expect(200, {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }, done);
  });
});

describe('POST /login', () => {
  it('responds with Welcome message', (done) => {
    const userName = 'Betty';
    request(app)
      .post('/login')
      .send({ userName })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json|html/)
      .expect(200, { message: `Welcome ${userName}` }, done);
  });
});
