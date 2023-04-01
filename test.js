// const fs = require('fs');
// const path = require('path');
// const Employee = require('./models/employee');
// const Shift = require('./models/shift');

// // load the env vars
// require('dotenv').config();

// // connect to DB
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// const db = mongoose.connection;


// db.on('connected', async function() {

//     console.log("connected to DB");
    
//     dropPunches();

//     // let emp = await getEmployee();
//     // emp = emp[0];
//     // createShift(emp._id);

// });


// function dropPunches() {
//     Shift.findById("6424c82301b6469001ca8913")
//     .then(shift => {
//         shift.punches = [];
//         shift.save();
//     })
//    .then(r => {console.log('shift punches dropped')})
// }

// function getEmployee() {
//     return Employee.find({});
// }

// function createShift(empId) {
//     let date = new Date();
//     date.setDate(date.getDate()-1);
//     Shift.create({
//         date: date.toISOString(),
//         employee: empId,
//         open: false,
//         punches: [
//             {type: 'in',  time: new Date(2023, 2, 28, 9, 0, 0).toISOString()},
//             {type: 'out', time: new Date(2023, 2, 28, 12, 30, 0).toISOString()},
//             {type: 'in',  time: new Date(2023, 2, 28, 13, 0, 0).toISOString()},
//             {type: 'out', time: new Date(2023, 2, 28, 17, 0, 0).toISOString()},
//         ]
//     })
//     .then(r => console.log('Shift created'));
// }
