const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAll);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
