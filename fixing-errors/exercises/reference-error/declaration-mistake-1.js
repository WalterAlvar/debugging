'use strict';

/*
  environment:

  name:Uncaught ReferenceError
  message: welf is not defined

  callstack:
  at eval (eval at <anonymous> (declaration-mistake-1.js:2), <anonymous>:18:6)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)
eval @ VM77:18
(anonymous) @ VM76:2
evaller.onload @ study-with.js:56
(anonymous) @ study-with.js:58
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277
load (async)
(anonymous) @ study-with.js:33
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277

  life cycle:

  the mistake: "welf" is assigned with a value, but it is not properly declared

  the fix(es): declare the variable
*/

let welf = 'ingrad';

console.log(welf);
