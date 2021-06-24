'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake: (Variables names must begin with a letter)
  Since there is a semicolon  after (let favoriteNumber = 4;) I think the next line its a different variable.

  the fix(es): 
  Assign a proper variable name, not a number.
*/

let favoriteNumber = 4;
let three = favoriteNumber;

console.log(three);
