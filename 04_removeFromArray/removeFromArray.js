const removeFromArray = function(Arr, ...theArgs) {
    let resultArr = Arr.filter(ele => !theArgs.includes(ele))
return (resultArr);
};

// Do not edit below this line
module.exports = removeFromArray;
