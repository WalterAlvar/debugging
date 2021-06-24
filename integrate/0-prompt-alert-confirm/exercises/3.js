'use strict';

// fill in the blank to pass the assertion

let interactionValue;

console.log('interactionValue:', typeof interactionValue, interactionValue);

console.assert(typeof interactionValue === 'undefined', 'interactionValue should be undefined');
/*
  environment: Chrome

  name: Uncaught ReferenceError
  message:"is not defined"

  callstack: 
    at eval (eval at <anonymous> (3.js:2), <anonymous>:2:26)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:445)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: Syntax and Semantic mistake in line #5 (extra underscore and a string type instead of Undifined)

  the fix(es): 1- Change the variable to let, it seems like there's no undefined "const"
  2- Remove the underscore 
*/