'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake:

  the fix(es):
*/

let userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}
let isValidUserName = true ;
console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
