'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.When(/^I click on "([^"]*)"/, function(clickableElement) {
    client.waitForVisible(clickableElement);
    client.click(clickableElement);
  });
  
  this.When(/^I enter "([^"]*)" in "([^"]*)"$/, function (text, field) {
    client.waitForVisible(field);
    client.setValue(field, text);
  });

  this.Then(/^The element "([^"]*)" should have text "([^"]*)"$/, function (selector, text) {
    client.waitForVisible(selector);
    expect(client.getText(selector)).toBe(text);
  });

  this.Then(/^I should see the element "([^"]*)"$/, function (selector) {
    client.waitForExist(selector);
    client.waitForVisible(selector);
  });
};
