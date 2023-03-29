const mongoose = require('mongoose');
const settings = require('../config/settings');
const Schema = mongoose.Schema;

const punchSchema = new Schema({
    type: {
        type: String,
        enum: [...settings.punch_types],
        required: true,
    },
    time: {
        type: String,
        match: settings.date_and_time_format,
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    }
});

const shiftSchema = new Schema({
    date: {
        type: String,
        match: settings.date_and_time_format,
        required: true
    },
    open: {
        type: Boolean,
        required: true
    },
    punches: [punchSchema],
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    approved: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Shift', shiftSchema);