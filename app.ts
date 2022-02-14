// Union types

function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineNumbers = combine(55, 7);
const combineNames = combine('Ellie', 'May');

console.log(combineNumbers, combineNames);
