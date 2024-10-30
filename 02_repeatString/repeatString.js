const repeatString = function(string, numOfTimes) {
    if(numOfTimes < 0){
        return "ERROR"
    }
    let returnString = ""
    for(let i = 0; i < numOfTimes; i++){
        returnString += string
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
