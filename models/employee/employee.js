const mongoose = require('mongoose');
const data_format = require('../../config/data_formats');
const Schema = mongoose.Schema;

const punchSchema = new Schema({
    type: {
        type: String,
        enum: ['START', 'END', 'IN', 'OUT', 'LUNCH_OUT', 'LUNCH_IN'],
        required: true,
    },
    time: {
        type: String,
        match: data_format.date_format,
        required: true,
    },
},
{timestamps: true});

const shiftSchema = new Schema({
    punches: [punchSchema]
},
{timestamps: true});

const employeeSchema = new Schema({
    empId: String,
    firstName: String,
    lastName: String,
    shifts: [shiftSchema],
    requests: [{type: Schema.Types.ObjectId, ref: 'Timeoffrequest'}]
},
{timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema);