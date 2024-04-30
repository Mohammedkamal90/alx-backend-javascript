const { expect } = require('chai');

const request = require('supertest');
const app = require('./api');

describe('Cart page', () => {
  it('Returns correct response when :id is a number', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Payment methods for cart 12');
  });

  it('Returns 404 when :id is NOT a number', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.status).toEqual(404);
  });
});
