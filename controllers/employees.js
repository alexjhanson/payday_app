const Employee = require("../models/employee");

module.exports = {
    index,
};

function index(req, res) {
    Employee.find({})
    .then(result => res.status(200).json(result[0]))
    .catch(err => res.status(400).json(err))
}

