'use strict'

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.When(/^I click on the subscribe button$/, function () {
    client.waitForVisible('button#subscribe');
    client.click('button#subscribe');
  });

  this.When(/^I click on "([^"]*)" subscribe button$/, function (title) {
    client.waitForVisible('#allchannels');
    var index = client.getText('#allchannels .row h4').indexOf(title) + 1;
    client.click('#allchannels .row #subscribe:nth-child(' + index + ')')
  });

  this.Then(/^the "([^"]*)" channel should be in "([^"]*)"$/, function (title, element) {
    client.waitForVisible(element);
    var index = client.getText(element + ' .row h4').indexOf(title);
    expect(index).not.toBe(-1);
  });


  this.Then(/^I shouldn't see my channels$/, function () {
    expect(client.elements('#mychannels').value.length).toBe(0);
  });

  this.Then(/^I should see "([^"]*)" channels in "([^"]*)"$/, function (count, element) {
    client.waitForVisible(element);
    expect(client.elements(element + ' .row').value.length).toBe(parseInt(count));
  });

}
