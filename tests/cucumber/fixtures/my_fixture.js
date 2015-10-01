'use strict';

Meteor.methods({

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
      console.log(user._id)
      Meteor.users.remove({_id: user._id});
    }
  }

});
