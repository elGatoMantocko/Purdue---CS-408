'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^I am signed out$/, function (callback) {
    this.client
      .url(process.env.ROOT_URL)
      .executeAsync(function(done) {
        Meteor.logout(done);
      }).and.notify(callback);
  });

  this.Given(/^Channels collection is empty$/, function(callback) {
    server.call('reset');
  });

  this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
    // client is a pre-configured WebdriverIO + PhantomJS instance
    // process.env.ROOT_URL always points to the mirror
    client.url(url.resolve(process.env.ROOT_URL, relativePath)).and.notify(callback);
  });

  this.Then(/^I should see "([^"]*)" channels$/, function (expectedCount, callback) {
    // you can use chai in step definitions also
    client.waitForVisible('.channel');
    expect(client.elements('.channel').value.length).to.equal(parseInt(expectedCount)).and.notify(callback);
  });

};
