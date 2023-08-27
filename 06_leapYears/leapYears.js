const leapYears = function(year) {
    if(year % 4 ==  0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                return(true);
            }
            else{
                return(false);
            }
        }
        else{
            return(true);
        }
    }
    else{
        return(false);
    }
};

// Do not edit below this line
module.exports = leapYears;

// One-liner
// leapYears = function(year) { return 
// ( year % 4 === 0                 &&      (year % 100 !== 0                       ||          year % 400 === 0) 
//   divisible by 4 is a leapYear   and     (divisible by 100 is not a leapYear     unless      divisible by 400)
// ); }