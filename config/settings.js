

const date_and_time_format = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
const punch_types = {
    IN: 'in',
    OUT: 'out',
    LUNCH: 'lunch',
    LUNCH_END: 'lunch end',
    *[Symbol.iterator]() {
        for(let key in this)
            yield this[key];
    }};

module.exports = {
    date_and_time_format,
    punch_types,
}