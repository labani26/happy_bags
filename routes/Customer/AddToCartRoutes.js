const express = require('express');
const { AddToCart, getCustomerCarts } = require("../../controller/Customer/AddToCartController");
const router = express.Router();

// Create an order (authenticated users only)
router.post('/AddToCart',  AddToCart);

// Get all orders for the logged-in user
router.get('/getCustomerCart',  getCustomerCarts);

module.exports = router;
