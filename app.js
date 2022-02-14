// Union types
function combine(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineNumbers = combine(55, 7);
var combineNames = combine('Ellie', 'May');
console.log(combineNumbers, combineNames);
