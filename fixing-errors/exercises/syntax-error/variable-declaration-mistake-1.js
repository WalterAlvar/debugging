'use strict';

/*
  environment: Chrome

  name:SyntaxError
  message: Identifier 'tree' has already been declared

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: "All JavaScript variables must be identified with unique names."
  -Thus, the identifier it is used twice
  the fix(es): Change one identifier
*/

let tree = 'oak';

let tree2 = 'birch';
//ussing 'template literals'
console.log(`this way we have ${tree}  and  ${tree2}`);
