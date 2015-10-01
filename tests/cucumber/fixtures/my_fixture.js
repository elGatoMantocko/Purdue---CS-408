'use strict';

Meteor.methods({

  'test/createAccount': function(useremail, userpass) {
    check(useremail, String);
    check(userpass, String);

    Accounts.createUser({email: useremail, password: userpass});
  },

  'reset_users': function() {
    // Remove all users
    Meteor.users.remove({});
  },

  'reset_user': function(useremail) {
    check(useremail, String);

    // Array of Meteor user accounts
    var users = Meteor.users.find().fetch();

    // Find user based on email under nested emails array
    var user = _.find(users, function(user) { 
      return _.find(user.emails, function(email) { 
        return email.address === useremail;
      });
    });

    // If we found a user, remove it
    if (typeof user !== 'undefined') {
      Meteor.users.remove({_id: user._id});
      return { _id: user._id, removed: true };
    }

    return { _id: null, removed: true };
  }

});
