
const DayOfWeekShort = ['SUN','MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
// const DayOfWeekLong = ['SUN','MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

const MonthShort = ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
// const MonthLong = ['JANUARY','FEBRUARY', 'MARCH', 'ARPIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

/**
 * 
 * @param {date} time- Date object 
 * @returns {string} - string representing time in format hh:min:ss
 */
function formatTime(time) {

    let hours = time.getHours();
    let am_pm = "AM";

    if(hours > 12) {
        hours %= 12;
        am_pm = "PM";
    } 


    return `${hours.toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')} ${am_pm}`;
}

function getClockDate() {

    let today = new Date();

    return `${DayOfWeekShort[today.getDay()]} ${MonthShort[today.getMonth()]} ${today.getDate().toString().padStart(2, '0')}`;
}

function areDatesEqual(date1, date2) {

    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}

export { formatTime, getClockDate, areDatesEqual};

const date_and_time_utils = {
    formatTime,
    getClockDate,
    areDatesEqual,
}

export default date_and_time_utils;