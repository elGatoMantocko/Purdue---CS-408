module.exports = function () {
  this.Before(function () {

    this.AuthenticationHelper = {
      login: function () {
        client.waitForExist('a.dropdown-toggle');
        client.click('a.dropdown-toggle');
        client.setValue('input#login-email', 'me@example.com');
        client.setValue('input#login-password', 'letme1n');
        client.click('button#login-buttons-password');
        //client.waitForExist('#login-name-link');
      },

      logout: function () {
        client.executeAsync(function (done) {
          Meteor.logout(done);
        });
      },

      createAccount: function (profile) {
        return server.call('fixtures/createAccount', {
          email: 'me@example.com',
          password: 'password',
          profile: profile
        });
      },

      createAccountAndLogin : function(profile) {
        this.createAccount(profile);
        this.login();
      }
    };

  });
};
