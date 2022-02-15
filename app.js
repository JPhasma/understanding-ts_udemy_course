// functions have a return type eg: number
// this is either infered by TS or can be defined
// eg: must only return numbers
function add(n1, n2) {
    return n1 + n2;
}
// for a function that does not return a value
// the type 'void' is infered or can be defined
// eg:
function printResults(num) {
    console.log('Results: ' + num); // << there is no return here
}
printResults(add(27, 9));
//  Function types
// 'Function types dfine the parameters and return type of a funcion'
// TS can define that a variable name is a function,
// and what values can be passed in and what value type is return
// eg:
var combineValue;
// the abover specifies that the variable can only be a function
// that accepts two number values and return only a number
// so, pointing 'combineValues' to 'printResults' would throw a TS error
// TS does not like this >>:  combineValue = printResults;
