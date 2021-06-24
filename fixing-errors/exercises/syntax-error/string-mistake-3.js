'use strict';

/*
  environment: Chrome

  name: SyntaxError:
  message: Unexpected string

  callstack:
      at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:450)
    at HTMLButtonElement.<anonymous> (javascript-class.js:277)

  life cycle:

  the mistake: break linea inside string, also a double set of the same quotation marks inside the string.

  the fix(es):use a single line and combine "" with '' 
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';

console.log(quotesInQuotes);
