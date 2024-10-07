const express = require('express');
const { createOrder, getCustomerOrders } = require('../../controller/Customer/OrderController');
<<<<<<< HEAD
const {isAuthenticated} = require('../../middleware/isAuthenticated');
=======
const isAuthenticated = require('../../middleware/isAuthenticated');
>>>>>>> c5fb60db2ba48f1b2b157bbd0f21b39a1c6b4696
const router = express.Router();

// Create an order (authenticated users only)
router.post('/createOrder', isAuthenticated, createOrder);

// Get all orders for the logged-in user
router.get('/getCustomerOrder', isAuthenticated, getCustomerOrders);

module.exports = router;
