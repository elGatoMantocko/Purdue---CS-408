'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^I am signed out$/, function() {
    this.AuthenticationHelper.logout();
  });

  this.Given(/^"([^"]*)" has not registered$/, function (user) {
    expect(server.call('reset_user', user).removed).toBe(true);
  });

  this.When(/^I register "([^"]*)" with password "([^"]*)"$/, function (email, password) {
    this.AuthenticationHelper.createAccount(email, password);
  });

  this.When(/^"([^"]*)" signs in with password "([^"]*)"$/, function (email, password) {
    this.AuthenticationHelper.login('test@test.com', 'testpass');
  });

  this.Then(/^"([^"]*)" should be signed in$/, function(useremail) {
    client.executeAsync(function(done) {
      done(Meteor.userId());
    }).value.should.be.a('string');
  });

};
