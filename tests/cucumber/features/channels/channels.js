'use strict'

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^The "([^"]*)" collection is empty$/, function(collection) {
  });

  this.Then(/^I should see "([^"]*)" channels$/, function (expectedCount) {
    expectedCount = parseInt(expectedCount);

    if(expectedCount > 0) {
      client.waitForVisible('.channel');
    }

    var numberOfChannelsOnPage = client.elements('.channel').value.length;
    expect(numberOfChannelsOnPage).toEqual(expectedCount);
  });

};
