// api.test.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Cart page', function() {
  this.timeout(7865); // Set timeout to 5 seconds

  it('Correct status code when :id is a number?', () => {
    return new Promise((resolve, reject) => {
      request.get('http://localhost:7865/cart/12', (error, response) => {
        if (error) return reject(error);
        expect(response.statusCode).to.equal(200);
        resolve();
      });
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', () => {
    return new Promise((resolve, reject) => {
      request.get('http://localhost:7865/cart/hello', (error, response) => {
        if (error) return reject(error);
        expect(response.statusCode).to.equal(404);
        resolve();
      });
    });
  });
});
