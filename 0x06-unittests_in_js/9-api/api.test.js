const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api.js'); // Import the Express app

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Cart page', () => {
    it('Correct status code when :id is a number', (done) => {
        chai.request(app)
            .get('/cart/12')
            .end((err, res) => {
                res.should.have.status(200); // Assertion to check the status code
                done(); // Indicating the completion of the test case
            });
    });

    it('Correct status code when :id is NOT a number (=> 404)', (done) => {
        chai.request(app)
            .get('/cart/hello')
            .end((err, res) => {
                res.should.have.status(404); // Assertion to check the status code
                done(); // Indicating the completion of the test case
            });
    });

    // Add more test cases if needed
});
