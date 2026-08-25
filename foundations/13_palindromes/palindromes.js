const palindromes = function (str) {
    let finalString = ""
    let modStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); 
    let noSpace = modStr.replace(/ +/g, "")
    for (const char of noSpace) {
        finalString += char.toLowerCase()
    }

    return finalString === finalString.split("").reverse().join("");
};

// learning to remove punctuation in JS
    // https://www.geeksforgeeks.org/javascript/how-to-remove-punctuation-from-text-using-javascript/
    // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex

// learning to remove space between text in a string in JS
    // https://stackoverflow.com/questions/18159216/remove-white-space-between-the-string-using-javascript

// reversing a string in JS
    // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// Do not edit below this line
module.exports = palindromes;
