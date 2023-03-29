
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

function shiftDayDateFormat(date) { return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() % 100}`; }

function areDatesEqual(date1, date2) { return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate(); }

function normalizeTime(time) {

    let hours = time.getHours();

    if(hours > 12) {
        hours %= 12;
    }
    
    return hours === 0 ? 12 : hours;

}

function getAmPm(time) {

    let hours = time.getHours();
    return hours >= 12 ? 'PM' : 'AM';
}

function dateSuffix(date) {

    let suffix;

    switch(date.getDate()) {
        case 1:
        case 21:
        case 31:
            suffix = 'st';
            break;
        case 2:
        case 22:
            suffix = 'nd';
            break;
        case 3:
        case 23:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
    }

    return suffix;
}

const date_and_time_utils = {
    formatTimeToMinutes,
    formatTimeToSeconds,
    shiftWeekDateFormat,
    shiftDayDateFormat,
    getClockDate,
    areDatesEqual,
    dateSuffix,
    getAmPm,
};

export default date_and_time_utils;

export { 
        formatTimeToMinutes, 
        formatTimeToSeconds, 
        shiftWeekDateFormat,
        shiftDayDateFormat, 
        getClockDate, 
        areDatesEqual,
        dateSuffix,
        getAmPm,
    };
