const express = require("express");
const { signup, signin } = require("../../controller/Admin/AdminController"); // Ensure the path is correct

const router = express.Router();

// Define the routes for signup and signin
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;


// const express = require('express');
// const { signup, signin } = require('../../controller/Customer/UserController');

// const router = express.Router();

// // POST route to register a new user
// router.post('/signup', signup);
// router.post('/signin', signin);

// module.exports = router;
