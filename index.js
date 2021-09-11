'usestrict';
let test1 = 'abcdef';
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { 'abcdef': 123 };
let test8 = ['abcdef', 123];
function test9() { return 'abcdef' };
let test10 = null;
let test11 = 0/0; // NaN;
let test12 = 10 / 0; // Infinity
let test13 = 10/0 - 10/0; // NaN

console.log(typeof test1); // string
console.log(typeof test2); // number
console.log(typeof test3); // boolean
console.log(typeof test4); // object
console.log(typeof test5); // object
console.log(typeof test6); // undefined
console.log(typeof test7); // object
console.log(typeof test8); // object
console.log(typeof test9); // function
console.log(typeof test10); // object
console.log(typeof test11); // number
console.log(typeof test12); // number
console.log(typeof test13); // number
