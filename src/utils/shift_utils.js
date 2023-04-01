
// import {default as dt_utils} from "./date_and_time";

const shift_util = {
    createShift,
    getCurrentShift,
    getCurrentWeeks
 };

export default shift_util;
 
export { createShift, getCurrentShift, getCurrentWeeks };


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

function getCurrentWeeks(empId) {
    return fetch(`api/employees/${empId}/currentweeks`)
            .then(res => res.json());
}
