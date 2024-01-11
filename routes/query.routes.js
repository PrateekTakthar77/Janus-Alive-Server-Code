const express = require('express')
const router = express.Router();
const query = require("../controller/query.controller")

router.post('/', query.Getuserquery)

module.exports = router