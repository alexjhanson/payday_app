const Shift = require('../../models/shift');
const Request = require ('../../models/request');
const sh_utils = require('../../utils/shift_utils');
const p_utils = require('../../utils/punch_utils');

module.exports = {
    getCurrentShift,
    getWeeks,
    getLastPunch,
    getRequests
}

function getCurrentShift(req, res) {
    Shift.find({employee: req.params.id})
    .then(shifts => sh_utils.getCurrentShift(shifts))
    .then(shift => res.status(200).json(shift));
}

function getWeeks(req, res) {
    Shift.find({employee: req.params.id})
    .then(shifts => sh_utils.getWeeks(shifts))
    .then(weeks => res.status(200).json(weeks));
}

function getLastPunch(req, res) {
    Shift.find({employee: req.params.id})
    .then(shifts => p_utils.getLastPunch(shifts))
    .then(punch => res.status(200).json(punch));
}

function getRequests(req, res) {
    Request.find({employee: req.params.id})
    .then(requests => res.status(200).json(requests) );
}