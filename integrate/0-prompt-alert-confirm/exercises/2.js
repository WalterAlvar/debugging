'use strict';

// fill in the blank to pass the assertion

const inputValue = ('asdf');

console.log('inputValue:', typeof inputValue, inputValue);

const inputAssertion = typeof inputValue === 'object'
  || typeof inputValue === 'string';

console.assert(inputAssertion, 'inputValue should be a string or an object');


/*
  environment: Chrome

  name: Uncaught ReferenceError
  message: "is not defined"

  callstack: at eval (eval at <anonymous> (2.js:2), <anonymous>:2:20)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:445)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: In line #5, there is a syntax mistake: "const" with an extra underscore before the parenthesis

  the fix(es):Remove the underscore
*/