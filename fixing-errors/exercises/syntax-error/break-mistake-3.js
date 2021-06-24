'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Illegal return statement

  callstack:
  at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: -the "return" statement in a 'while' loop, which only uses 'break' and 'continue'

  the fix(es): - change to "brake"
*/

let iterations = 0;

while (true) {
  iterations += 1;

  if (iterations > 8) {
    break;
  }
}

console.log(iterations);
