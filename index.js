// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a GET /welcome route
app.get('/welcome', (req, res) => {
  res.send('Hello!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

