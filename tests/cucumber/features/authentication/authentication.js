'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^I am signed out$/, function() {
    this.AuthenticationHelper.logout();
  });

  this.Then(/^"([^"]*)" should be signed in$/, function(useremail) {
    var userId = client.executeAsync(function(done) {
      done(Meteor.userId());
    });

    expect(userId).not.toBeNull();
  });

};
