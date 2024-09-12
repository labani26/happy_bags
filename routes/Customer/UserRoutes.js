const express = require('express');
const { signup, signin } = require('../../controller/Customer/UserController');

const router = express.Router();

// POST route to register a new user
router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;
