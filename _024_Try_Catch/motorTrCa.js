var d = new Date("10/25/1989");

if (Object.prototype.toString.call(d) === "[object Date]") {
    // it is a date
    if (isNaN(d.getTime())) {
        // d.valueOf() could also work
        // date is not valid
    } else {
        // date is valid
    }
} else {
    // not a date
}

/*console.log(d.toString()); shows 'Invalid Date'
console.log(typeof d);  shows 'object'
console.log(d instanceof Date);  shows 'true'*/