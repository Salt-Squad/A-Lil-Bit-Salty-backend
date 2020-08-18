// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Instantiate express application object
const app = express();

// .use cors
app.use(cors());

// Add express.json
app.use(express.json());

// urlencoded
app.use(express.urlencoded({ extended: true }));
const imageController = require('./controllers/images');
app.use('/api/images', imageController);

// Require the user resources routes and controllers
const imagesController = require('./controllers/images');
app.use('/api/images', imagesController);

// Handle Errors Server-wide
// This is part of middleware that will be part of stretch goals

// Define a port for the API to run on && define a PORT to use if port isn't found. (PORT || 3000)
const port = process.env.PORT || 3000;

// Run server on designated port
app.listen(port, () => {
	console.log('app is listening on port:', port);
});
