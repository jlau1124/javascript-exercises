const removeFromArray = function(arr, ...otherArgs) {
    let i = 0;
    while (i < arr.length) {
        if (otherArgs.includes(arr[i])) {
            arr.splice(i, 1)
        } else {
            ++i
        }
    }
    return arr
};


// helpful links
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    // https://www.w3schools.com/jsref/jsref_includes_array.asp


// Do not edit below this line
module.exports = removeFromArray;
