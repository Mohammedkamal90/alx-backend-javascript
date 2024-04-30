// 5-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToAPI = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the correct total for 100 and 20', () => {
        sendPaymentRequestToAPI(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToAPI(10, 10);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
});
