const date_and_time_utils = {
    formatTimeToMinutes,
    formatTimeToSeconds,
    shiftWeekDateFormat,
    standardDateFormat,
    toISODate,
    getClockDate,
    areDatesEqual,
    dateSuffix,
    getAmPm,
    getDateAtMidnight
};


export default date_and_time_utils;

export { 
        formatTimeToMinutes, 
        formatTimeToSeconds, 
        shiftWeekDateFormat,
        standardDateFormat, 
        toISODate,
        getClockDate, 
        areDatesEqual,
        dateSuffix,
        getAmPm,
        getDateAtMidnight,
    };



const WEEK_DAY_SHORT = ['SUN','MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
// const WEEK_DAY_LONG = ['SUN','MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

const MONTH_SHORT = ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
// const MONTH_LONG = ['JANUARY','FEBRUARY', 'MARCH', 'ARPIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];


function formatTimeToSeconds(time) { return `${normalizeTime(time).toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`; }

function formatTimeToMinutes(time) { return `${normalizeTime(time).toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`; }

function getClockDate() {

    let today = new Date();

    return `${WEEK_DAY_SHORT[today.getDay()]} ${MONTH_SHORT[today.getMonth()]} ${today.getDate().toString().padStart(2, '0')}`;
}

function shiftWeekDateFormat(date) { return `${MONTH_SHORT[date.getMonth()]} ${date.getDate()}${dateSuffix(date).toUpperCase()}`; }

function standardDateFormat(date) { return `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear() % 100}`; }

function toISODate(date) { return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`}

function areDatesEqual(date1, date2) { return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate(); }

function normalizeTime(time) {

    let hours = time.getHours();

    if(hours > 12) {
        hours %= 12;
    }
    
    return hours === 0 ? 12 : hours;

}

function getAmPm(time) {  return time.getHours() >= 12 ? 'PM' : 'AM'; }

function dateSuffix(date) {
    switch(date.getDate()) {
        case 1:
        case 21:
        case 31:
            return 'st';
        case 2:
        case 22:
            return 'nd';
        case 3:
        case 23:
            return 'rd';
        default:
            return 'th';
    }
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

