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

  this.When(/^I enter "([^"]*)" into the title field$/, function (text) {
    client.waitForVisible("input#title");
    client.setValue("input#title", text);
  });

  this.When(/^I enter "([^"]*)" into the query field$/, function (text) {
    client.waitForVisible("input#query");
    client.setValue("input#query", text);
  });

  this.When(/^I submit the new channel form$/, function () {
    client.waitForVisible("input#submit");
    client.click("input#submit");
  });

  this.Then(/^I should be on the new channel$/, function () {
    client.waitForVisible("#channel-header");
    expect(client.getText("#channel-header")).toBe("New channel");
  });

  this.Then(/^the new channel header should have text "([^"]*)"$/, function (text) {
    client.waitForVisible("#newchannel-header");
    expect(client.getText("#newchannel-header")).toBe(text);
  });

  this.Then(/^"([^"]*)" should have text "([^"]*)"$/, function (selector, text) {
    client.waitForVisible(selector);
    expect(client.getText(selector)).toBe(text);
  });

};
