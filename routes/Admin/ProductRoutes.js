const express = require("express");
const { Products } = require("../../controller/Admin/ProductController");

const router = express.Router();

router.post("/addProduct", Products);

module.exports = router;