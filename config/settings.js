

const date_and_time_format = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
const punch_types = {
    START: 'start',
    END: 'end',
    IN: 'in',
    OUT: 'out',
    *[Symbol.iterator]() {
        for(let key of Object.keys(this))
            yield this[key];
    }};

module.exports = {
    date_and_time_format,
    punch_types,
}