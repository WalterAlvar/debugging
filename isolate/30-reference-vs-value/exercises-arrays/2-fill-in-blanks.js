'use strict';
console.log('-- begin --');

// two different arrays with the same values
//  how many solutions can you find?
// psst.  use JS Tutor & the debugger

const array1 = {a: 'foo', b: 'fighters'};
const array2 = {a: 'foo', b: 'fighters'};

const test1 = array1 !== array2;
console.assert(test1, 'Test 1');

const test2 = deepCompare(array1, array2);
console.assert(test2, 'Test 2');

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}


console.log('-- end --');