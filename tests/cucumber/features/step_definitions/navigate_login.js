'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  //this.Given(/^I am signed out$/, function() {
    //function logout(done) { Meteor.logout(done); }

    //this.browser.executeAsync(logout);
  //});

  this.Given(/^I am on "([^"]*)"$/, function(relativePath) {
    client.url(url.resolve(process.env.ROOT_URL, relativePath));
  });

  this.When(/^I click the Login button$/, function() {
    client.click('#login-btn');
  });

  this.Then(/^I am redirected to \"\/login\"$/, function() {
  });

};
