'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Missing initializer in const declaration

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: I really dont know why but it does not work declaring "path" with const, but it does while declaring with "let". Edit (The 2015 version of JavaScript (ES6) allows the use of the const keyword to define a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.)

  the fix(es): Change const/let
*/

const userName = 'qopiznu';

let path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}
console.log(path);

