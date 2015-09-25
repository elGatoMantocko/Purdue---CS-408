'use strict';

module.exports = function () {

  this.Given(/^I am a new user$/, function (callback) {
    callback();
  });

  this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
    client.waitForExist('title');

    var actual = client.getTitle();
    var expected = expectedTitle;

    expect(actual).toBe(expected);
  });
}
