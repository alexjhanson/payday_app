const router = require('express').Router();
const employeesApiController = require("../../controllers/api/employees");

router.get("/:id/currentshift", employeesApiController.getCurrentShift);
router.get("/:id/lastpunch", employeesApiController.getLastPunch);
router.get("/:id/requests", employeesApiController.getRequests);
router.get("/:id/currentweeks", employeesApiController.getWeeks);

module.exports = router;