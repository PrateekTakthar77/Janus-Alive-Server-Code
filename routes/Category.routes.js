const express = require('express')
const router = express.Router();
const path = require('path')
const categoryController = require('../controller/category.controller')

router.get('/', categoryController.getallCategory)
router.post('/', categoryController.createCategory)
// router.delete('/delete/id', categoryController.getCategoryandDelete)
router.delete('/delete/:id', categoryController.getCategoryandDelete);


module.exports = router;