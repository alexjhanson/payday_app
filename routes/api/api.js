const router = require('express').Router();
const employeesApiRouter = require('./employees');

router.use("/employees", employeesApiRouter);

module.exports = router;