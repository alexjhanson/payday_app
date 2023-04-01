
module.exports = {
    getDateAtMidnight,
}

function getDateAtMidnight(date) {

    if(!date) {
        date = new Date();
    }

    if(typeof date === 'string') {
        let d = new Date(date)
        d.setHours(0,0,0,0);
        return d;
    }

    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0,0,0,0);
}