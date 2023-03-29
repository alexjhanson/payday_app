const router = require('express').Router();
const employeesController = require("../controllers/employees");

router.get("/", employeesController.index);

module.exports = router;