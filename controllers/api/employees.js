const Shift = require('../../models/shift');
const sh_utils = require('../../utils/shift_utils');

module.exports = {
    getCurrentShifts,
}

function getCurrentShifts(req, res) {
    const[start, end] = sh_utils.getWorkPeriod(new Date());
    Shift.find({employee: req.params.id})
    .then(shifts => sh_utils.filterShifts(shifts, start, end))
    .then(shifts => sh_utils.getWeeks(shifts, start))
    .then(weeks => res.status(200).json(weeks));
}
