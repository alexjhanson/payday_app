const router = require('express').Router();
const employeeController = require("../controllers/employee");

router.get("/", employeeController.index);

module.exports = router;