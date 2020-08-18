// Require necessary NPM package(s) and point to db connection
const mongoose = require('../connection');

// Set var for userSchema = new
// set objects that will be part of the schema
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		// This is part of authentication and middleware
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

// Export module to mongoose ('User', var for userSchema)
module.exports = mongoose.model('User', userSchema);
