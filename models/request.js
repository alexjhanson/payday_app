const mongoose = require('mongoose');
const settings = require('../config/settings');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    type: {
        type: String,
        enum: ['PTO', 'SICK', 'PAT', 'MAT', 'VOTE', 'COMP', 'MIL', 'JURY', 'PRSN', 'VAC'],
        required: true,
    },
    startDate: {
        type: String,
        match: settings.date_and_time_format,
        required: true,
    },
    endDate: {
        type: String,
        match: settings.date_and_time_format,
        required: true,
    },
    notes: {
        type: String,
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ['APRV', 'DEN', 'PEN'],
        required: true,
    },

},
{timestamps: true});

module.exports = mongoose.model('Timeoffrequest', requestSchema);