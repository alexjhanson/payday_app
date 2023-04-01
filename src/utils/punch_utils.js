import {default as dt_utils} from './date_and_time';

const punch_utils = {
        getLastPunch,
        makePunch,
        getPunchRows,
        getPunchTypes,
        getPunchButtonColor,
        formatLastPunch,
        displayLastPunchDate,
        totalHours
    };

export default punch_utils;

export { 
        getLastPunch,
        makePunch,
        getPunchRows, 
        getPunchTypes, 
        getPunchButtonColor, 
        formatLastPunch, 
        displayLastPunchDate, 
        totalHours 
    };

function getLastPunch(empId) {
    return  fetch(`api/employees/${empId}/lastpunch`)
            .then(res => res.json());
}

function makePunch(shiftId, punch) {
    return fetch(`/shifts/${shiftId}/punches`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(punch)
            })
            .then(res => res.json());
}

function getPunchRows(punches) {
    let rows = [];
    let i = 0;

    while(i + 1 < punches.length) {
        rows.push(
            {
                punch1: punches[i],
                punch2: punches[i + 1],
                timeDiff: punchTimeDiff(punches[i], punches[i + 1])
            }
        )
        i += 2;
    } 

    if(punches.length % 2 !== 0)
        rows.push({
            punch1: punches[punches.length - 1],
            punch2: null,
            timeDiff: 0,
        })

    return rows;
}

function getPunchTypes(lastPunch) {

    switch(lastPunch ? lastPunch.type : "") {
        case 'in':
            return ['out', 'lunch'];
        case 'lunch end':
            return ['out', null];
        case 'lunch':
            return [null, 'lunch end'];
        default:
            return ['in', null];
    }
}

function getPunchButtonColor(type) { return type === 'in' ? 'rgb(48,142,124)': 'rgb(232,85,61)' }

function formatLastPunch(lastPunch) {
    return lastPunch ? `${lastPunch.type.toUpperCase()}: ${dt_utils.formatTimeToMinutes(new Date(lastPunch.time))} ${dt_utils.getAmPm(new Date(lastPunch.time))}` : null
}

function displayLastPunchDate(lastPunch) {
    if(lastPunch) {
        let punchDate = dt_utils.getDateAtMidnight(lastPunch.time);
        let today = dt_utils.getDateAtMidnight();
        return today.getTime() !== punchDate.getTime();
    }
    return false;
}

function totalHours(punchRows) {
    let totalHrs = 0;

    punchRows.forEach(row => {
        totalHrs += row.timeDiff;
    });

    return parseFloat(totalHrs.toFixed(2));
}
/*
 *************** module utility functions ***************************
 */


function punchTimeDiff(punch1, punch2) {

    const HOUR = 3_600_000;
   
    let diff = new Date(punch2.time).getTime() - new Date(punch1.time).getTime();

    return parseFloat((diff / HOUR).toFixed(2));

}