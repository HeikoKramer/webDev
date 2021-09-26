const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        //  Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const hans     = new User('Hans');
const ute      = new User('Ute');
const katrin   = new User('Katrin');

const chatroom = new Chatroom();

chatroom.register(hans);
chatroom.register(ute);
chatroom.register(katrin);

hans.send('Hello Ute', ute);
katrin.send('Gude Ute!', ute);
ute.send('Na ihr Frösche, was geht ab!?');
