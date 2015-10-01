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

  this.When(/^I click on the signin link$/, function() {
    client.waitForVisible("#login-dropdown-list");
    client.click("#login-dropdown-list");
    client.waitForVisible("#signup-link");
    client.click("#signup-link");
  });
  
  this.When(/^I enter "([^"]*)" into the username field$/, function (text) {
    client.waitForVisible("#login-email");
    client.setValue("#login-email", text);
  });

  this.When(/^I enter "([^"]*)" into the password field$/, function (text) {
    client.waitForVisible("#login-password");
    client.setValue("#login-password", text);
  });

  this.When(/^I submit the registration form$/, function () {
    client.waitForVisible("#login-buttons-password");
    client.click("#login-buttons-password");
  });
};
