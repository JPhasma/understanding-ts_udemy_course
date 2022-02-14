var Activity;
(function (Activity) {
    Activity[Activity["SLEEP"] = 7] = "SLEEP";
    Activity[Activity["EAT"] = 19] = "EAT";
    Activity[Activity["CUDDLE"] = 1000] = "CUDDLE";
    Activity[Activity["PROTEST"] = 99999] = "PROTEST";
    Activity["SUNBATHING"] = "Always"; // (even text values are possible if required)
})(Activity || (Activity = {}));
var cat = {
    name: 'Lithy',
    age: 9,
    likes: ['tuna', 'sitting in front of the laptop screen'],
    meals: [3, 'Purina']
};
console.log(cat);
console.log('enum value', Activity.SLEEP); // logs enumerated value of 0
// an example benefit of nkowing an array is all of one type is TS can then provide
// many methods (eg: toUpperCase() ), as TS is expecting all elements of a string arrayy to be strings
// eg:
console.log(cat.likes.map(function (like) {
    return like.toUpperCase();
}));
// object types - TS infers the type of data in an 'Object Type'
// infered by TS (NOTICE THE SEMICOLONS, it is NOT an object)
//const cat = {
//   name: string;
//   age: number;
// };
// if needing an array of a mix of strings and numbers, use: any[]
