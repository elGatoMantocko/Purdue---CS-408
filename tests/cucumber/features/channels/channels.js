'use strict'

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^the database has "([^"]*)" channels$/, function (count) {
    client.executeAsync(function(count, done) {
      done(Meteor.call('/fixtures/addChannels', count));
    }, parseInt(count));
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

  this.Then(/^I should see "([^"]*)" channels$/, function (expectedCount) {
    expectedCount = parseInt(expectedCount);

    if(expectedCount > 0) {
      client.waitForVisible('.list-group');
    }

    var numberOfChannelsOnPage = client.elements('.list-group-item').value.length;
    expect(numberOfChannelsOnPage).toEqual(expectedCount);
  });

  this.Then(/^the new channel header should have text "([^"]*)"$/, function (text) {
    client.waitForVisible("#newchannel-header");
    expect(client.getText("#newchannel-header")).toBe(text);
  });

  this.Then(/^I should see a title required validation error$/, function () {
    client.waitForVisible("#title-error");
    expect(client.getText("#title-error")).toBe("The value of the \"title\" field is required");
  });

  this.Then(/^I should see a query required validation error$/, function () {
    client.waitForVisible("#query-error");
    expect(client.getText("#query-error")).toBe("The value of the \"query\" field is required");
  });

  this.Then(/^channel "([^"]*)" should display "([^"]*)"$/, function (element, text) {
    client.waitForVisible('#channel-' + element);
    expect(client.getText('#channel-' + element)).toBe(text);
  });

};
