'use strict';


/*
  environment: chrome

  name: SyntaxError
  message: Undefined label 'x'

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: ("The continue statement (with or without a label reference) can only be used inside a loop.")
  -

  the fix(es): Change "continue" with "return"
*/


const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);

console.log(seven);
