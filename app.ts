// Union types

function combine(
  n1: number | string, // << union types
  n2: number | string,
  resultConversion: 'as-number' | 'as-text' // << literal type

  // union types and literal types often used together
) {
  let result;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineNumbers = combine(55, 7, 'as-number');
const combineNames = combine('Ellie', 'May', 'as-text');

console.log(combineNumbers, combineNames);
