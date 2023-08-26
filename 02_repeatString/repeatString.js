const repeatString = function(str, num) {

if(num >= 0){
    let strResult = '';
    for(let i = 0; i < num; i++){
        strResult += str;
    }
    return(strResult);
}
else{
    return('ERROR')
}


};

// Do not edit below this line
module.exports = repeatString;
