const sumAll = function(a, b) {
    if (!(a > 0) || !Number.isSafeInteger(a)) {
        return 'ERROR'
    } else if (!(b > 0) || !Number.isSafeInteger(b)) {
        return 'ERROR'
    } else {
        let range = [];
        if (a > b) {
            while (a >= b) {
                range.push(a)
                a--
            }
        } else {
            while (a <= b) {
                range.push(a)
                a++
            }
        }
        let results = range.reduce((sum, current) => sum + current, 0)
        return results
    }
};


// links that helped
    // https://stackoverflow.com/questions/14164838/how-do-i-create-a-loop-to-iterate-between-2-numbersyears
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
// TOP community helped a lot 
// Do not edit below this line
module.exports = sumAll;
