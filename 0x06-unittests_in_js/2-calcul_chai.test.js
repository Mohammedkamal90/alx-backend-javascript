// File: 2-calcul_chai.test.js

import { expect } from 'chai';  // Import expect from Chai as an ES module
import calculateNumber from './2-calcul_chai.js';  // Import the function to test


describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the rounded sum of two numbers', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the rounded subtraction of two numbers', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the rounded division of two numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing by 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid operation type', function() {
        it('should throw an error for invalid operation type', function() {
            expect(() => {
                calculateNumber('INVALID', 1, 2);
            }).to.throw(Error, 'Invalid operation type');
        });
    });
});
