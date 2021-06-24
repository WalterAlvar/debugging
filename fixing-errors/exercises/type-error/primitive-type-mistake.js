'use strict';

/*
  environment: Chrome

  name: TypeError
  message: Cannot read property 'length' of null

  callstack:
      at eval (eval at <anonymous> (primitive-type-mistake.js:2), <anonymous>:20:23)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake:

  the fix(es):
*/

const userInput = null;

console.log(userInput.length);
