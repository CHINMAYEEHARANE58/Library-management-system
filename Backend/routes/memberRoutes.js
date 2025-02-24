const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.post('/', memberController.createMember);

router.get('/:id', memberController.getMember);

router.put('/:id', memberController.updateMember);

module.exports = router;
