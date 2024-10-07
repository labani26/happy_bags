const express = require('express');
<<<<<<< HEAD
const { signup, signin, logout } = require('../../controller/Customer/UserController');
const { isAuthenticated } = require('../../middleware/isAuthenticated'); // Import the middleware
const { updateUserDetails } = require("../../controller/Customer/UpdateUserDetailsController");
const { getUserDetails } = require('../../controller/Customer/GetUserDetails');

const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', isAuthenticated, logout);
=======
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
>>>>>>> c5fb60db2ba48f1b2b157bbd0f21b39a1c6b4696
router.post('/updateUserDetails', isAuthenticated, updateUserDetails);
router.get('/profile', isAuthenticated, getUserDetails);

module.exports = router;
