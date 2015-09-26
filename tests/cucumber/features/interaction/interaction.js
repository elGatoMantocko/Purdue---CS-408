'use strict';

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.When(/^I click on "([^"]*)"/, function(clickableElement) {
    client.waitForVisible(".container-fluid");

    client.click(clickableElement);
  });

  this.Then(/^The element "([^"]*)" should have text "([^"]*)"$/, function (selector, text) {
    expect(client.getText(selector)).toBe(text);
  });

};
