// functions have a return type eg: number
// this is either infered by TS or can be defined

// eg: must only return numbers
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// for a function that does not return a value
// the type 'void' is infered or can be defined

// eg:
function printResults(num: number): void {
  console.log('Results: ' + num); // << there is no return here
}

printResults(add(27, 9));
