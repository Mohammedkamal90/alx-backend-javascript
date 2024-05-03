// Importing the express library
const express = require('express');

// Creating an instance of the express application
const app = express();

// Defining the port number
const PORT = 7865;

// Endpoint to handle requests to the root URL
app.get('/', (req, res) => {
  // Sending a welcome message as the response
  res.send('Welcome to the payment system');
});

// Endpoint to handle requests to the /cart/:id URL
app.get('/cart/:id(\\d+)', (req, res) => {
  // Extracting the cart ID from the request parameters
  const cartId = req.params.id;
  // Sending a response with the payment methods for the specified cart ID
  res.send(`Payment methods for cart ${cartId}`);
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  // Logging a message indicating that the server is running
  console.log(`API available on localhost port ${PORT}`);
});

// Exporting the express application to be used in other modules
module.exports = app;
