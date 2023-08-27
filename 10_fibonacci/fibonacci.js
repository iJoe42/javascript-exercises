const fibonacci = function(pos) {
    if(pos < 0) return "OOPS"
    let fibSeq = [0,1];
    for(let i = 1; i < pos; i++){
        fibSeq.push(fibSeq[i] + fibSeq[i-1]);
    }
    return fibSeq[pos];
};

// Do not edit below this line
module.exports = fibonacci;
