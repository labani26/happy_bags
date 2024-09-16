const express = require('express');
const { signup, signin } = require('../../controller/Customer/UserController');
const {updateUserDetails} = require("../../controller/Customer/UpdateUserDetailsController")

const router = express.Router();

// POST route to register a new user
router.post('/signup', signup);
router.post('/signin', signin);
router.patch('/updateUserDetails', updateUserDetails);

module.exports = router;
