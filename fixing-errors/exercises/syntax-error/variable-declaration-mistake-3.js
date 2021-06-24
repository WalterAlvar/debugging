'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token '='

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: variable without identifier

  the fix(es): add an identifier to the variable 
*/

const quote = 'always be learning';

console.log(quote);
