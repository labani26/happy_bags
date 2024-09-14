const express = require('express');
const { cancelOrder } = require('../../controller/Customer/CancelOrderContrioller');
const router = express.Router();


// Route to cancel an order
router.patch('/cancelOrder/:orderId', cancelOrder);

module.exports = router;
