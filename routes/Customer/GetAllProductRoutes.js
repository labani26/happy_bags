const express = require ('express');
const {getAllProduct} = require('../../controller/Customer/GetProductController');
const router = express.Router();

router.get("/getAllProduct",getAllProduct);

module.exports = router;