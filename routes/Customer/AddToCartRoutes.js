const express = require('express');
const { AddToCart, getCustomerCarts, removeFromCart } = require("../../controller/Customer/AddToCartController");
const isAuthenticated = require('../../middleware/isAuthenticated'); // Use your existing JWT auth middleware

const router = express.Router();

// Create an order (authenticated users only)
router.post('/AddToCart', isAuthenticated, AddToCart);

// Get all carts for the logged-in user
router.get('/getCustomerCart', isAuthenticated, getCustomerCarts);

// Remove an item from the cart (authenticated users only)
router.delete('/removeFromCart/:cartItemId', isAuthenticated, removeFromCart);

module.exports = router;
