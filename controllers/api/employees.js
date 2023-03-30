const Shift = require('../../models/shift');
const sh_utils = require('../../utils/shift_utils');
const p_utils = require('../../utils/punch_utils');

module.exports = {
    getCurrentShifts,
    getLastPunch,
}

function getCurrentShifts(req, res) {
    Shift.find({employee: req.params.id})
    .then(shifts => sh_utils.getWeeks(shifts))
    .then(weeks => res.status(200).json(weeks));
}

function getLastPunch(req, res) {
    Shift.find({employee: req.params.id})
    .then(shifts => p_utils.getLastPunch(shifts))
    .then(punch => res.status(200).json(punch));
}