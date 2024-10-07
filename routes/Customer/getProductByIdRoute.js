const express = require('express');
const { getProductById } = require("../../controller/Customer/getProductById"); // Import the controller
const router = express.Router();

// Route to get product details by productId
router.get('/getProductDetail/:productId', getProductById);

module.exports = router;
