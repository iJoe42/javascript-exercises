const reverseString = function(str) {

    reverseStr = '';

    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }
return(reverseStr);
};

// Do not edit below this line
module.exports = reverseString;