const express = require('express');
const { createOrder, getCustomerOrders } = require('../../controller/Customer/OrderController');
const router = express.Router();

// Create an order (authenticated users only)
router.post('/createOrder',  createOrder);

// Get all orders for the logged-in user
router.get('/getCustomerOrder',  getCustomerOrders);

module.exports = router;
