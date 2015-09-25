'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^Channels collection is empty$/, function() {
    server.call('reset');
  });

  this.Then(/^I should see "([^"]*)" channels$/, function (expectedCount) {
    // you can use chai in step definitions also
    //client.waitForVisible('.channel');
    expect(client.elements('.channel').value.length == parseInt(expectedCount));
  });

};
