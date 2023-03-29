const router = require('express').Router();
const shiftsController = require('../controllers/shifts');

router.post('/', shiftsController.create);

module.exports = router;