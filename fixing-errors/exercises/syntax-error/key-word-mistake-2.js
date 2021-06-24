'use strict';

/*
  environment:

  name: SyntaxError
  message: Unexpected token 'for'

  callstack:
  at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)
(anonymous) @ VM510:2
evaller.onload @ study-with.js:56
(anonymous) @ study-with.js:58
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277
load (async)
(anonymous) @ study-with.js:33
studyWith @ javascript-class.js:450
(anonymous) @ javascript-class.js:277

  life cycle:

  the mistake: 
    -In line #32 there is a "const"   innecesary before "for"
    -Also there is a '=' after "for"
    -In line 37 there is an unnecessary '}'

  the fix(es): Remove all the unnecesary
*/

for (let i = 0; i < 5; i++) 
  console.log(i);

