const mongoose = require('mongoose');
const settings = require('../config/settings');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    type: {
        type: String,
        enum: ['PTO', 'SICK', 'PAT', 'MAT', 'VOTE', 'COMP', 'MIL', 'JURY', 'PRSN', 'VAC'],
        required: true,
    },
    start: {
        type: String,
        match: settings.date_and_time_format,
        required: true,
    },
    end: {
        type: String,
        match: settings.date_and_time_format,
        required: true,
    },
    notes: {
        type: String,
        maxlength: 150,
    },
    status: {
        type: String,
        enum: ['APRV', 'DEN', 'PEN'],
        default: 'PEN'
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    }
    },
{timestamps: true});

module.exports = mongoose.model('Request', requestSchema);
