// Require necessary NPM package(s)
const express = require('express');
// Require router
const router = express.Router();
// Set var to path of models (User)
const User = require('../db/models/User');
// User authentication (bcrypt and createUserToken) go directly below this line

// Set up routes

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => createUserToken(req, user))
		.then((token) => res.json({ token }))
		.catch(next);
});

// SIGN UP
// POST /api/signup
router.post('/signup', (req, res, next) => {
    
});

// FUTURE FEATURE
// USER SELF SELF SERVICE - UPDATE PASSWORD
// UPDATE
// PUT api/users/`db _id string here`

// FUTURE FEATURE
// USER SELF SERVICE - DELETE ACCOUNT
// DESTROY
// DELETE api/users/`db _id string here`

// Export module to router

//test comment