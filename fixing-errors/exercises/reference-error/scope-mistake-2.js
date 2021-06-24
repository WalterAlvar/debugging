'use strict';

/*
  environment: Chrome

  name: Uncaught ReferenceError
  message: isValidUserName is not defined

  callstack: 
    at eval (eval at <anonymous> (scope-mistake-2.js:2), <anonymous>:27:57)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)
eval @ VM136:27
(anonymous) @ VM135:2
evaller.onload @ study-with.js:56
(anonymous) @ study-with.js:58
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277
load (async)
(anonymous) @ study-with.js:33
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277

  life cycle:

  the mistake: The last console.log is declare outside the scope

  the fix(es): Put the last console.log inside the scope
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true;
} else {
  const isValidUserName = false;
  
  console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
}


