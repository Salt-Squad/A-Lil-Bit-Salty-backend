// Require necessary NPM package(s) and point to db connection
const mongoose = require('../connection');

// Set var for imageSchema = new
// set objects that will be part of the schema
const ImageSchema = new mongoose.Schema({
	name: String,
	url: Array,
});

const Image = mongoose.model('Image', ImageSchema);

// Export module to mongoose ('Image', var for imageSchema)
module.exports = Image;
