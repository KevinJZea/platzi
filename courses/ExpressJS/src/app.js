const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = app;
