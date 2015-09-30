(function () {

  'use strict';

  Meteor.methods({
    
    'reset_users': function() {
      Meteor.users.remove({});
    }
  });

})();
