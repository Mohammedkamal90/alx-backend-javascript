// 6-payment_token.test.js
const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done(); // Call done to signal that the test is complete
            })
            .catch((error) => {
                done(error); // Call done with the error if there's a rejection
            });
    });
});
