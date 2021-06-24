'use strict';
console.log('-- begin --');

let a = 'y';
let b = 'x';
let temp;//reserve in memory this declared variable

// write some code, be sure to use temp!

temp = a;
a = b;
b = temp; //assign the value of variable -b- to the variable -temp-

// fill in the _ to pass the assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === 'y';
console.assert(isTrue3, 'Test 3'); //comparison test to the reserved variable


console.log('-- end --');