const express = require('express');
const app = express();
const registerRoutes = require('./config/registerRoutes');

app.use(express.json());
registerRoutes(app)

module.exports = app;