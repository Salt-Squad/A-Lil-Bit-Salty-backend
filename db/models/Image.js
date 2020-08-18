// Require necessary NPM package(s) and point to db connection
const mongoose = require('../db/connection');

// Set var for imageSchema = new
// set objects that will be part of the schema
const DessertSchema = new mongoose.Schema({
	name: String,
	url: Array,
	hashtag: [{}],
});

// Export module to mongoose ('Image', var for imageSchema)
module.exports = Image;
