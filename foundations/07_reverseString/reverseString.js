const reverseString = function(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }
    return reverseString;
};


// its not as simple as python lol but useful resources on how to do it (obviously i learned and understood before coping it down)
// https://stackoverflow.com/questions/16619247/new-to-javascript-how-to-write-reverse-iteration
// https://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// Do not edit below this line
module.exports = reverseString;
