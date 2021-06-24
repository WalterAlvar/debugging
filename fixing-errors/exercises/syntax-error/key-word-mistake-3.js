'use strict';

/*
  environment:

  name: Chrome SyntaxError
  message: Unexpected token 

  callstack:

  life cycle:

  the mistake: Syntax and semantics
    - There was a set of '{}' confusing the scope
    - The conditional 'else' was repeated in the same scope 

  the fix(es):
    -remove extra '{}'
    -change the second "else" for "else if"
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} 

else if (userName.length < 5) 
  console.log('just right');

else {
  console.log('too long');
}
