const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/:id', bookController.getBook);
router.put('/:id', bookController.updateBook);

module.exports = router;
