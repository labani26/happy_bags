const express = require("express");
const { addProduct } = require("../../controller/Admin/ProductController");

const router = express.Router();

router.post("/addProduct", addProduct);

module.exports = router;