'use strict';

/*
  environment:

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)
(anonymous) @ VM1921:2
evaller.onload @ study-with.js:56
(anonymous) @ study-with.js:58
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277
load (async)
(anonymous) @ study-with.js:33
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277

  life cycle:

  the mistake: single '=' used for compare

  the fix(es): make it '=='
*/

let isHappy = false;

true == isHappy;

console.log(isHappy);