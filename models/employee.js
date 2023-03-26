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
},
{timestamps: true});

const shiftSchema = new Schema({
    punches: [punchSchema]
},
{timestamps: true});

const imageSchema = new Schema({
    title: {
        type: String,
        default: "profile picture"
    },
    image: {
      data: Buffer,
      contentType: String
    }
  },
  {timestamps: true});

const employeeSchema = new Schema({
    empId: {
        type: String,
        required: true,
    },
    image: imageSchema,
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    shifts: [shiftSchema],
    requests: [{type: Schema.Types.ObjectId, ref: 'Timeoffrequest'}]
},
{timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema);