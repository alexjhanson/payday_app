const router = require('express').Router()
const requestsController = require('../controllers/requests');

router.post('/', requestsController.create);
router.post('/:id', requestsController.update);
router.delete('/:id', requestsController.delete);

module.exports = router;