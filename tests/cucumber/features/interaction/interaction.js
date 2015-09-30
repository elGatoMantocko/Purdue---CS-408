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
 
    // This is reporting that the email already exists
    if (client.waitForExist('div.alert-danger')) {
      console.log(client.getText('div.alert-danger'))
    }
    expect(client.getText(selector)).toBe(text);
  });

};
