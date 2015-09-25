'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^I am on the home page"$/, function() {
    client.url(process.env.ROOT_URL);
  });

  this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
    client.url(url.resolve(process.env.ROOT_URL, relativePath));
  });
};
