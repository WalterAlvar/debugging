'use strict';

/*
  environment: Chrome

  name:SyntaxError
  message:Unexpected identifier

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: -a double set of ""
    -Also it is considered a bad practice to start a string with a symbol

  the fix(es): change one set of repeated "" for a set of ''
*/

const anchorName = '#Home';

const innerHtml = '<p>Click here to <a href="anchorName"> go home </a></p>';

console.log(anchorName);


