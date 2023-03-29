const router = require('express').Router();
const punchesController = require("../controllers/punches");

router.post('/shifts/:id/punches',  punchesController.create);

module.exports = router;