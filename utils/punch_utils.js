
module.exports = {
    getLastPunch,
}

function getLastPunch(shifts) {  
    shifts = findLastTwoShifts(shifts);

    if(shifts.length === 2) {
        if(shifts[0].punches.length)
            return shifts[0].punches[shifts[0].punches.length-1];
        if(shifts[1].punches.length)
            return shifts[1].punches[shifts[1].punches.length-1];
    } else {
        if(shifts[0].punches.length)
            return shifts[0].punches[shifts[0].punches.length-1];
    }
    return null;
}

/*
 ***************** Helper functions ********************
 */

function findLastTwoShifts(shifts) {
    if(shifts.length) {
        let results = [];
        shifts.sort((a,b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        
        results.push(shifts[shifts.length -1]);

        if(shifts.length > 1)
            results.push(shifts[shifts.length -2]);

        return results;
    }
    return null;
}
