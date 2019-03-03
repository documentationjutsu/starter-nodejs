'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const message = { message: "Hello, World" };

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send(JSON.stringify(message) + "\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);