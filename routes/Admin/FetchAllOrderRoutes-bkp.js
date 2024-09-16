const express = require("express");
const {fetchAllOrder} = require("../../controller/Admin/FetchAllOrderController");
const router = express.Router();

router.get("/fetchOrder", fetchAllOrder);

module.exports = router;