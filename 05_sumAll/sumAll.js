const sumAll = function(num1, num2) {
    if( Number.isInteger(num1) && Number.isInteger(num2) ){
        let begin = Math.min(num1, num2);
        let end = Math.max(num1, num2);
        let resultSum = 0;
        if(Math.sign(begin) != 1 || Math.sign(end) != 1){
            return("ERROR");
        }
        else{
            for(let i = begin; i <= end; i++){
                resultSum += i;
            }
            return(resultSum);
        }
    }
    else{
        return("ERROR");
    }
};

// Do not edit below this line
module.exports = sumAll;
