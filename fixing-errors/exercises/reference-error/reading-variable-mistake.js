'use strict';

/*
  environment: chrome

  name: Uncaught ReferenceError
  message: Cannot access 'tomatoes' before initialization

  callstack:
  at eval (eval at <anonymous> (reading-variable-mistake.js:2), <anonymous>:18:13)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: The variable 'tomatoes' is declared after the console.log

  the fix(es): Interchange positions of the variable for being read before
*/

let tomatoes = 'fresh';

console.log(tomatoes);


