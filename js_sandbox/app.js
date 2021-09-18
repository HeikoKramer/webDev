const user = {email: 'testing@heikokraemer.de'};

try {
  if(!user.name) {
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  console.log(e);
  // > SyntaxError: User has no name
} 

