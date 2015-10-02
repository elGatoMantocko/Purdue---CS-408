Meteor.methods({

  '/fixtures/reset': function() {
    User.remove({});
    Channel.remove({});
  },

  '/fixtures/addUser': function(opts) {
    check(opts, Object);
    Accounts.createUser({
      username: opts.username,
      password: opts.password ? opts.password : "password"
    });
  },

  '/fixtures/addChannel': function(opts) {
    check(opts, Object);
    var channel = new Channel(opts);
    channel.save();
  }

});
