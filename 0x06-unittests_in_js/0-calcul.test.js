// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { it, describe } = require("mocha");

describe('calculateNumber', function() {
    it('should return the rounded sum of two numbers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
