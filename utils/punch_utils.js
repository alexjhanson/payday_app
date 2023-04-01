const sh_util = require('./shift_utils');

module.exports = {
    getLastPunch,
}

function getLastPunch(shifts) { 
    return new Promise((resolve) =>  { 
        if(shifts.length) {
            shifts = shifts.sort(sh_util.ascending);
            let punches = shifts[shifts.length - 1].punches;
            resolve(punches[punches.length -1]);
        }
        
        resolve(null);
    } );  
}

