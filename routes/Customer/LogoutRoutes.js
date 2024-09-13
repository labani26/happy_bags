const express = require('express');
const { logout } = require('../../controller/Customer/LogoutController');
const router = express.Router();

// Add logout route
router.get('/logoutWebsite', logout);

module.exports = router;
