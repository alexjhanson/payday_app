const router = require('express').Router();
const employeesApiController = require("../../controllers/api/employees");

router.get("/:id/currentShifts", employeesApiController.getCurrentShifts);

module.exports = router;