const express = require('express');
const app = express();

const PORT = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get available payments
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
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export the app for testing purposes
