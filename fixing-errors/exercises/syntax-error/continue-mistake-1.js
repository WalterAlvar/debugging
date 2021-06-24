'use strict';

/*
  environment:

  name: SyntaxError
  message: Illegal continue statement: no surrounding iteration statement

  callstack:

  life cycle:

  the mistake:"continue" statement 

  the fix(es): remove "continue"
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
  ;
}
