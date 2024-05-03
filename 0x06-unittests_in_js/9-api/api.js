// api.test.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done(); // Call done() when the test is complete
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done(); // Call done() when the test is complete
    });
  });
});
