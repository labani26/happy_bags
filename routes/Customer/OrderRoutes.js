const express = require('express');
const { createOrder, getCustomerOrders } = require('../../controller/Customer/OrderController');
const {isAuthenticated} = require('../../middleware/isAuthenticated');
const router = express.Router();

// Create an order (authenticated users only)
router.post('/createOrder', isAuthenticated, createOrder);

// Get all orders for the logged-in user
router.get('/getCustomerOrder', isAuthenticated, getCustomerOrders);

module.exports = router;
