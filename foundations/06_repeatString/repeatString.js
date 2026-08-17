const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let stringRepeat = "";
        for (let i = 0; i < num; i++) {
            stringRepeat += str
        }
        return stringRepeat;
    }

};

// links that helped me understand and this exercise done
// https://stackoverflow.com/questions/45149893/javascript-loop-to-return-string-x-times
// https://forum.freecodecamp.org/t/basic-algorithm-scripting-repeat-a-string-repeat-a-string/426797

// Do not edit below this line
module.exports = repeatString;
