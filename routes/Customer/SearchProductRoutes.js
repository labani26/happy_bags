const express = require('express');
const { search } = require('../../controller/Customer/SearchProductController');
const router = express.Router();


router.post('/searchBag',  search);

module.exports = router;