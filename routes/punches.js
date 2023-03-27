const router = require('express').Router();
const punchesController = require("../controllers/punches");

router.post('/employees/:id/punches',  (req, res) => {
    console.log("made it to punches router")
    punchesController.create(req, res)
});

module.exports = router;