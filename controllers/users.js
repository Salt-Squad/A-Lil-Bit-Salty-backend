// Require necessary NPM package(s)
const express = require('express')
// Require router
const router = express.Router();
// Set var to path of models (User)
const User = require('../db/models/User')
// User authentication (bcrypt and createUserToken) go directly below this line

// Set up route
// SIGN IN
// GET api/users

// SHOW
// GET api/users/`db _id string here`

// CREATE
// POST api/users

// UPDATE
// PUT api/users/`db _id string here`

// DESTROY
// DELETE api/users/`db _id string here`

// Export module to router