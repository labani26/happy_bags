const express = require('express');
const { signup, signin, logout } = require('../../controller/Customer/UserController');
const { isAuthenticated } = require('../../middleware/isAuthenticated'); // Import the middleware
const { updateUserDetails } = require("../../controller/Customer/UpdateUserDetailsController");
const { getUserDetails } = require('../../controller/Customer/GetUserDetails');

const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', isAuthenticated, logout);
router.post('/updateUserDetails', isAuthenticated, updateUserDetails);
router.get('/profile', isAuthenticated, getUserDetails);

module.exports = router;
