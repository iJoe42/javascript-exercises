const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
 let total = 0;
 for(item of arr){
  total += item;
 }
 return total;

};

const multiply = function(...args) {
 let product = 1;
 args.forEach(multFunc)
 function multFunc(item){
  product *= item;
 }
 return product;
};

const power = function(base, pow) {
	return Math.pow(base, pow);
};

const factorial = function(num) {
  let factResult = 1;
	for(let i = num; i > 1; i--){
    factResult *= i;
  }
  return factResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
