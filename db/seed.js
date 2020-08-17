// The intent is to run this only once as it will both clear and seed the db with test info

// Require the Image model
const Image = require('../db/models/Image');

// Require the data
const seedData = require('./seeds.json');

// Delete any existing documents in the Images collection
Image.deleteMany()
// Use insertMany and feed it the seed data
	.then(() => Image.insertMany(seedData))
    // Log a successful result
	.then(console.log)
    // Log an error if things go sideways
	.catch(console.error)
    // Close the connection to the db after the process is complete
	.finally(process.exit);