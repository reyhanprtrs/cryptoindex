if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const { config } = require('./app/config');
const routes = require('./app/routes');
const { errorHandler } = require('./app/middlewares');

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  routes,
  errorHandler
]);

mongoose.connect('mongodb://localhost:27017/' + config[env].database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = app;