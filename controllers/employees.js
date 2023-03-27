const Employee = require("../models/employee");

module.exports = {
    index,
};

function index(req, res) {
    Employee.find({})
    .populate('requests')
    .then(result => {
        console.log('[get employee] Request Successful');
        res.status(200).json(result);
    })
    .catch(err => {
        console.log('[get employee] Request Failed', err);
        res.status(400).json(err);
    })
};
