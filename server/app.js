/* eslint-disable */
const express = require('express');
const listingRouter = require('./routers/listing.js');
const listingController = require('../db/controllers/listing.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('dev'));

app.use(express.json());

app.use('/:id/', express.static('public/dist'));

app.use(listingRouter); // if using middleware to listen to requests, do not put the path to listen to in app.use. That will be handled by the middleware
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;
