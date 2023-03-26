const Employee = require("../models/employee");

module.exports = {
    index,
};

function index(req, res) {
    Employee.find({})
    .populate('requests')
    .then((err, result) => {
        if(!err)
            res.status(200).json(result);
        else
            res.status(404).json({msg: 'could not log in user'});
    })
}