// union types and literal types often used together
function combine(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineNumbers = combine(55, 7, 'as-number');
var combineNames = combine('Ellie', 'May', 'as-text');
console.log(combineNumbers, combineNames);
