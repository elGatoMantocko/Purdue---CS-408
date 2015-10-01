module.exports = function () {
  this.Before(function () {

    this.AuthenticationHelper = {
      login: function (email, pass) {
        client.url(process.env.ROOT_URL);
        client.executeAsync(function (useremail, userpass, done) {
          Meteor.loginWithPassword(useremail, userpass, done);
        }, email, pass);
      },

      logout: function () {
        client.executeAsync(function (done) {
          Meteor.logout(done);
        });
      },

      createAccount: function (email, password) {
        server.call('test/createAccount', email, password);
      },

      createAccountAndLogin : function(profile) {
        this.createAccount(profile);
        this.login();
      }
    };

  });
};
