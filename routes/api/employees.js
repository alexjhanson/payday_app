const router = require('express').Router();
const employeesApiController = require("../../controllers/api/employees");

router.get("/:id/currentshifts", employeesApiController.getCurrentShifts);
router.get("/:id/lastpunch", employeesApiController.getLastPunch);

module.exports = router;