const Employee = require('../models/employee');

module.exports = {
    create,
};

function create(req, res) {

    console.log("in punches controller");

    Employee.findById(req.params.id)
    .then(emp => {
        emp.punches.push(req.body.punch);
        return emp.save();
    })
    .then(emp => res.status(200).json(emp))
    .catch(err => {
        console.log('could not save punch\n', err);
        res.status(400).json(err);
    });

};