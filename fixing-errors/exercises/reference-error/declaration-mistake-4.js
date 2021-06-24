'use strict';

/*
  environment: Chrome

  name: SyntaxError and Semantic Error
  message: 

  callstack:

  life cycle:

  the mistake: "Seven" was not declare as a variable.
  There was no console log after the operation. 

  the fix(es): add "let" to "seven" function
  add console.log calling seven to evaluate 
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

let seven = add(3, 4);

console.log(seven);