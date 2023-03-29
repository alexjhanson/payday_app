const Shift = require('../models/shift');

module.exports = {
    create,
};

function create(req, res) {
    Shift.create(req.body)
    .then(shift => res.status(200).json(shift))
    .catch(e => res.status(400).json(e));
}

