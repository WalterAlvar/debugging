'use strict';


/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected number

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake:Identifier not beggining with a letter (Names must begin with a letter)

  the fix(es):Change the identifier to letters i.e. 'number'
*/


const number = 'three';

console.log(number);
