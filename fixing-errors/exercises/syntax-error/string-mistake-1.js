'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid or unexpected token

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: -Variable 'a' is a String writen in two different lines 

  the fix(es): -Write it in a single line
*/

const a = 'this is two lines';

console.log (a);
