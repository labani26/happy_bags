const express = require('express');
const { signup, signin } = require('../../controller/Customer/UserController');
const { updateUserDetails } = require("../../controller/Customer/UpdateUserDetailsController");
const isAuthenticated = require('../../middleware/isAuthenticated');
const { getUserDetails } = require('../../controller/Customer/GetUserDetails');

const router = express.Router();

// POST route to register a new user
router.post('/signup', signup);

// POST route to sign in a user
router.post('/signin', signin);

// POST route to update user details, protected by JWT
router.post('/updateUserDetails', isAuthenticated, updateUserDetails);
router.get('/profile', isAuthenticated, getUserDetails);

module.exports = router;
