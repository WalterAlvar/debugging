'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Illegal break statement

  callstack:

  life cycle:

  the mistake:-Unnecesary break statement in line #22

  the fix(es):-Remove the "brake;"
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
}
