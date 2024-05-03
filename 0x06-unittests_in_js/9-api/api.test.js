const request = require('supertest');
const app = require('./api');

describe('Cart page', () => {
  it('Correct status code when :id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200, done);
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});
