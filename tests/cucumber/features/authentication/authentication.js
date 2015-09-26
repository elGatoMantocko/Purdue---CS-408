'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^I am signed out$/, function() {
    this.AuthenticationHelper.logout();
  });

  this.When(/^I click the login button$/, function() {
    client.url(process.env.ROOT_URL);

    client.waitForExist(".container-fluid", 1000);
    client.waitForVisible(".container-fluid", 1000);

    client.click("#login-btn");
  });

  this.When(/^I enter my authentication information$/, function() {
  });

  this.Then(/^I should be logged in$/, function() {
  });

};
