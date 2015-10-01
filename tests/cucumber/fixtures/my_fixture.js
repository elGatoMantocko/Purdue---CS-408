'use strict';

Meteor.methods({
  'reset_user': function(useremail) {
    check(useremail, String);

    var user = _.find(Meteor.users.find().fetch(), function(user) { 
      return _.find(user.emails, function(email) { 
        return email.address === useremail;
      });
    });

    if (typeof user !== 'undefined') {
      console.log(user._id)
      Meteor.users.remove({_id: user._id});
    }
  }
});
