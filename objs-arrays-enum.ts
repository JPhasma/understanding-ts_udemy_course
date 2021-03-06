enum Activity {
  SLEEP = 7,
  EAT = 19,
  CUDDLE = 1000,
  PROTEST = 99999, // enumeration numbers can be sequential or specified
  SUNBATHING = 'Always' // (even text values are possible if required)
}

const cat: {
  name: string;
  age: number;
  likes: string[];
  meals: [number, string]; // << TS can define and specicfy a Tuple
} = {
  name: 'Lithy',
  age: 9,
  likes: ['tuna', 'sitting in front of the laptop screen'], // TS infers an array of strings eg: string[]
  meals: [3, 'Purina']
};

console.log(cat);
console.log('enum value', Activity.SLEEP); // logs enumerated value of (was 0, now 7)

// an example benefit of nkowing an array is all of one type is TS can then provide
// many methods (eg: toUpperCase() ), as TS is expecting all elements of a string arrayy to be strings
// eg:
console.log(
  cat.likes.map(like => {
    return like.toUpperCase();
  })
);

// object types - TS infers the type of data in an 'Object Type'
// infered by TS (NOTICE THE SEMICOLONS, it is NOT an object)

//const cat = {
//   name: string;
//   age: number;
// };

// if needing an array of a mix of strings and numbers, use: any[]
