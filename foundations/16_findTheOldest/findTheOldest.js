const findTheOldest = function(arr) {
    let age;
  
    for (const obj of arr) {
        if (Object.hasOwn(obj, "yearOfDeath")) {
        age = obj["yearOfDeath"] - obj["yearOfBirth"]
        obj["age"] = age;
        } else {
        let currentYear = (new Date()).getFullYear();
        age = currentYear - obj["yearOfBirth"]
        obj["age"] = age;
        }
    }
    
    const oldest = arr.sort(function(a,b) {
    if (a.age > b.age) {
        return -1
    } else {
        return 1
    }
    })

    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
