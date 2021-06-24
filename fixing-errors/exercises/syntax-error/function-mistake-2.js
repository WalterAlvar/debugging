'use strict';

/*
  environment: Chrome

  name:SyntaxError
  message: Malformed arrow function parameter list

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: The function 'add' was not properly wrap inside ()

  the fix(es): wrap 'add' inside ()
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);

console.log(seven);