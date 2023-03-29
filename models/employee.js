const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: {
        type: String,
        default: "profile picture"
    },
    data: {
      type: Buffer,
      contentType: String,
      required: true
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
},
{timestamps: true});

module.exports = mongoose.model('Employee', employeeSchema);