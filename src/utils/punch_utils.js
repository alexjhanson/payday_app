
function punchInOut(shiftId, punch) {
    return fetch(`/shifts/${shiftId}/punches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(punch)
        })
        .then(res => {
            if(res.ok) 
                return res.json() ;
            else 
                throw new Error('Coulnd not make punch');
        })
        .catch(e => null);
}

function getPunchPairs(punches) {
    let pairs = [];
    let i = 0;

    while(i + 1 < punches.length) {
        pairs.push(
            {
                punch1: punches[i],
                punch2: punches[i + 1],
                timeDiff: punchTimeDiff(punches[i], punches[i + 1])
            }
        )
        i += 2;
    } 

    return pairs;
}

function getPunchTypes(lastPunch) {
    let punchType;
    let lunchType;

    switch(lastPunch ? lastPunch.type : "") {
        case 'in':
            punchType = 'out';
            lunchType = 'lunch';
            break;
        case 'lunch end':
            punchType = 'out';
            break;
        case 'lunch':
            punchType = null;
            lunchType = 'lunch end';
            break;
        default:
            punchType = 'in';
            lunchType = null;
    }

    return [punchType, lunchType];
}

function getPunchButtonColor(type) { return type === 'in' ? 'rgb(48,142,124)': 'rgb(232,85,61)' }

function totalHours(punchPairs) {
    let totalHrs = 0;

    punchPairs.forEach(pair => {
        totalHrs += pair.timeDiff;
    });

    return parseFloat(totalHrs.toFixed(2));
}

const punch_utils = {
    punchInOut,
    getPunchPairs,
    getPunchTypes,
    getPunchButtonColor,
    totalHours
};

export default punch_utils;

export { punchInOut, getPunchPairs, getPunchTypes, getPunchButtonColor, totalHours };


function punchTimeDiff(punch1, punch2) {

    const HOUR = 3_600_000;
   
    let diff = new Date(punch2.time).getTime() - new Date(punch1.time).getTime();

    return parseFloat((diff / HOUR).toFixed(2));

}