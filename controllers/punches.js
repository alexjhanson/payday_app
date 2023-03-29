const Shift = require('../models/shift');

module.exports = {
    create,
};

function create(req, res) {

    Shift.findById(req.params.id)
    .then(shift => {
        shift.punches.push(req.body);
        return shift.save();
    })
    .then(shift => res.status(200).json(shift))
    .catch(err => {
        res.status(400).json(err);
    });

}