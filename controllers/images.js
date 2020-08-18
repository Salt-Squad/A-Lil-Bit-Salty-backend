// Require necessary NPM package(s)
const express = require('express');
// Require router
const router = express.Router();
// Set var to path of models (Images)
const Image = require('../db/models/Image');

// Require any middleware for error functions and { deconstruct } any functions

// Require any middleware for auth functions and { deconstruct } any functions

// Set up route
// INDEX
// GET api/images
router.get('/', (req, res) => {
	Image.find().then((allImages) => {
		res.json(allImages);
	});
});
// SHOW
// GET api/images/`db _id string here`
router.get('/:title', (req, res) => {
	const imageName = req.params.name;
	Image.findOne({ name: imageName }).then((image) => {
		res.json(image);
	});
});

// CREATE
// POST api/images
router.post('/new', (req, res) => {
	const newImage = req.body;
	Image.create(newImage).then((newPicture) => {
		res.json(newPicture);
	});
});

// UPDATE
// PUT api/images/`db _id string here`
router.put('edit/:id', (req, res) => {
	Image.findOneAndUpdate({ _id: req.params.id }, req.body).then(
		(prevRecord) => {
			res.json(prevRecord);
		}
	);
});

// DESTROY
// DELETE api/images/`db _id string here`
router.delete('/:id', (req, res) => {
	Image.findOneAndDelete({ _id: req.params.id }).then((deleted) => {
		res.json(deleted);
	});
});

// Export module to router
module.exports = router;
