'use strict';


/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected end of input

  callstack:
  at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: Syntax
    -an extra { in line #28 after the loop 'for'

  the fix(es):
    -remove that extra '{'
*/



for (let i = 0; i < 5; i++) 
  console.log(i);


