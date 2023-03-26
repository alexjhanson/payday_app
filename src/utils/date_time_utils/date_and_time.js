
const DayOfWeekShort = ['SUN','MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
// const DayOfWeekLong = ['SUN','MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

const MonthShort = ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
// const MonthLong = ['JANUARY','FEBRUARY', 'MARCH', 'ARPIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

function getCurrentTime() {

    let currentTime = new Date();

    return {
        seconds: currentTime.getSeconds(),
        minutes: currentTime.getMinutes(),
        hours: currentTime.getHours()
    };

}

function formatTime(time) {

    let hours = time.hours;
    let am_pm = "AM";

    if(hours > 12) {
        hours %= 12;
        am_pm = "PM";
    } 


    return `${hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')} ${am_pm}`;
}

function getClockDate() {

    let today = new Date();

    return `${DayOfWeekShort[today.getDay()]} ${MonthShort[today.getMonth()]} ${today.getDate().toString().padStart(2, '0')}`;
}

function areDatesEqual(date1, date2) {

    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}

export { getCurrentTime, formatTime, getClockDate, areDatesEqual};

const DateTimeUtls = {
    getCurrentTime,
    formatTime,
    getClockDate,
    areDatesEqual,
}

export default DateTimeUtls;