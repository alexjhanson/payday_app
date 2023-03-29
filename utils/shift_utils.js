
module.exports = {
    getWorkPeriod,
    filterShifts,
    getWeeks
}

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

function getWeeks(shifts, start) {
    let date = new Date();
    let week1 = createWeek(date, start);
    let week2 = createWeek(date, start + 7);

    week1.shifts = shifts.filter(s => new Date(s.date).getDate() <= (start + 7));
    week2.shifts = shifts.filter(s => new Date(s.date).getDate() > (start + 7));
    
    return {
        week1,
        week2
    };
}

function createWeek(date, day) {
    return  {
        date: new Date(date.getFullYear(), date.getMonth(), day).toISOString(),
        shifts: []
    }
}
