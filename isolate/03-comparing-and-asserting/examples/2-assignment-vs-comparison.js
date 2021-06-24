// = and === look similar, but do VERY different things!
// = --> assigns a new value to a variable
// === --> compares two values

// it's difficult to explain, but easy to see
// click on "open in JS Tutor" for best results

// = assigns a value to variable, updating memory
let variableEx = 'value 1';
console.log(typeof variableEx, variableEx);

// === compares two values without changing memory
const firstComparison = variableEx === 'value 2';
console.log(typeof variableEX, variableEx);
console.log(typeof firstComparison, firstComparison);

// === compares the CURRENT value assigned to a variable
// changing a variable with = will change the result of the comparison
variableEx = 'value 2';
const secondComparison = variableEx === 'value 2';
console.log(typeof secondComparison, secondComparison);

// === comparisons can be written either way
const thirdComparison = 'value 2' === variableEx;
console.log(typeof thirdComparison, thirdComparison);

/*/ = assignments cannot be written either way
//  Invalid left-hand side in assignment
'value 2' = variableEx; // uncomment this line for an error */




console.log('-- end --');