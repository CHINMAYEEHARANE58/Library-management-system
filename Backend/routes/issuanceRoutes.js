const express = require('express');
const router = express.Router();
const issuanceController = require('../controllers/issuanceController');

router.post('/', issuanceController.createIssuance);

router.get('/:id', issuanceController.getIssuance);

router.get('/pending', issuanceController.getPendingIssuances);

module.exports = router;
