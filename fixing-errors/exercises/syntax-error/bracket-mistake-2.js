'use strict';


/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token '}'

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)
(anonymous) @ VM790:2
evaller.onload @ study-with.js:56
(anonymous) @ study-with.js:58
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277
load (async)
(anonymous) @ study-with.js:33
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277

  life cycle:

  the mistake: an extra } symbol

  the fix(es): erase the extra }
*/

for (let i = 0; i < 5; i++) { 
console.log(i);
}
