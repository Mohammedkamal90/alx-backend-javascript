const express = require('express');

const app = express();
const port = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get available payment methods
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).json({ message: `Welcome ${userName}` });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = server;
