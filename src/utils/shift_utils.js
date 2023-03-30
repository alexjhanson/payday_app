
function initializeShift(shifts, empId) {
    return new Promise(async (resolve) => {

        let today = new Date()
        let week = today.getDate() < new Date(shifts.week2.date).getDate() ? shifts.week1 : shifts.week2;

        let shift = week.shifts.find(s => {
            if(!s.open) {
                let date = new Date(s.date);
                date.setHours=(0,0,0);
                return date.getTime() === today.getTime();
            }
            return true;
        });

        if(!shift) {
            shift = await createShift(empId, today);
            week.shifts.push(shift);
        }

        resolve(shift);
    });
}

function syncShifts(shifts, shift) {
    let week = new Date(shift.date).getDate() < new Date(shifts.week2.date).getDate()? shifts.week1 : shifts.week2;
    let idx = week.shifts.findIndex(s => s._id === shift._id);

    if(idx > 0) {
        week.shifts.splice(idx, 0, shift);
    }
}

function createShift(empId, date) {
    return fetch(`/shifts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: date.toISOString(),
            open: true,
            employee: empId,
        })
    })
    .then(res => res.json());
}

const shift_util = {
    initializeShift,
    syncShifts
 };

 export default shift_util;
 
export { initializeShift, syncShifts };