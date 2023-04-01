
// import {default as dt_utils} from "./date_and_time";

const shift_util = {
    createShift,
    getCurrentShift
 };

export default shift_util;
 
export { createShift, getCurrentShift };


function createShift(empId, date, open) {
    return fetch(`/shifts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: date.toISOString(),
            open,
            employee: empId,
        })
    })
    .then(res => res.json());
}


function getCurrentShift(empId) {
    return fetch(`api/employees/${empId}/currentshift`)
            .then(res => res.json());
}



// function getLatestWeek(date, weeks) { return date.getDate() < new Date(weeks[1].date).getDate() ? weeks[0] : weeks[1]; }