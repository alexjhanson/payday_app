const dt_utils = require('./date_and_time_utils.js');

module.exports = {
    getCurrentShift,
    ascending,
    getWeeks
}

function getCurrentShift(shifts) {
    return new Promise(resolve => {
        if(shifts.length) {
            shifts.sort(ascending);
            let shift = shifts[shifts.length - 1];
            if(shift.open || dt_utils.getDateAtMidnight(shift.date).getTime() === dt_utils.getDateAtMidnight().getTime()){
                resolve(shift);
            }
        }
        resolve(null);
    })
}

function ascending(s1, s2) {
    s1 = dt_utils.getDateAtMidnight(s1.date);
    s2 = dt_utils.getDateAtMidnight(s2.date);
    return s1.getTime() - s2.getTime();
}

function getWeeks(shifts) {

    return new Promise(resolve => {
        let date = new Date();
        const[start, end] = getWorkPeriod(date);
    
        shifts = filterShifts(shifts, start, end);
    
        let week1 = createWeek(date, start);
        let week2 = createWeek(date, start + 7);
    
        week1.shifts = shifts.filter(s => new Date(s.date).getDate() <= (start + 7));
        week2.shifts = shifts.filter(s => new Date(s.date).getDate() > (start + 7));
        
        resolve([week1, week2]);
    });


}

/*
 ************ Helper functions ***************
 */


function getWorkPeriod(date) {
    let start = 1
    let end = 15

    if(date.getDate() > 15) {
        start = 16
        end = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    return [start, end];
}

function filterShifts(shifts, start, end) {
    return shifts.filter(s => {
        let date = new Date(s.date).getDate();
        return start <= date && date <= end;
    })
}


function createWeek(date, day) {
    return  {
        date: new Date(date.getFullYear(), date.getMonth(), day).toISOString(),
        shifts: []
    }
}
