const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the rounded sum of two numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the rounded subtraction of two numbers', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the rounded division of two numbers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by 0', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Invalid operation type', function() {
        it('should throw an error for invalid operation type', function() {
            assert.throws(() => {
                calculateNumber('INVALID', 1, 2);
            }, /Invalid operation type/);
        });
    });
});
