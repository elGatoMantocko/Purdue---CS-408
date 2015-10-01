'use strict'

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Then(/^I should see "([^"]*)" channels$/, function (expectedCount) {
    expectedCount = parseInt(expectedCount);

    if(expectedCount > 0) {
      client.waitForVisible('.channel');
    }

    var numberOfChannelsOnPage = client.elements('.channel').value.length;
    expect(numberOfChannelsOnPage).toEqual(expectedCount);
  });

  this.When(/^I click on the new channels button$/, function () {
    client.waitForVisible("#newchannel-btn");
    client.click("#newchannel-btn");
  });

this.Then(/^the new channel header should have text "([^"]*)"$/, function (text) {
    client.waitForVisible("#newchannel-header");
    expect(client.getText("#newchannel-header")).toBe(text);
  });

};
