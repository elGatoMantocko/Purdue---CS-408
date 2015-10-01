'use strict';

Meteor.methods({

  addUser: function(opts) {
    check(opts, Object);
    Meteor.users.remove({});
    Accounts.createUser({
      email: opts.email,
      password: opts.password ? opts.password : "password"
    });
  }

});
