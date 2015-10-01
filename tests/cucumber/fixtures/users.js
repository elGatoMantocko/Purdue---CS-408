'use strict';

Meteor.methods({

  addUser: function(opts) {
    check(opts, Object);
    Meteor.users.remove({});
    Accounts.createUser({
      username: opts.username,
      password: opts.password ? opts.password : "password"
    });
  }

});
