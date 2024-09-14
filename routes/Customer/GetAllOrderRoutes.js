const express = require("express");
const {getAllOrder} = require("../../controller/Customer/GetAllOrderController")
const router = express.Router();

router.get("/getAllOrder", getAllOrder);

module.exports = router;