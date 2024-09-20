const express = require("express");
const {getMyOrders} = require("../../controller/Customer/GetMyOrderController")
const router = express.Router();

router.get('/getMyOrders',getMyOrders);

module.exports = router;