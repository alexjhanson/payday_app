const router = require('express').Router();
const employeesController = require("../controllers/employees");

router.get("/", (req, res) => {
    console.log("made it to employee router");
    employeesController.index(req, res)
});

module.exports = router;