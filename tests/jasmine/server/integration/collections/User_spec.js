describe('User class', function() {

  beforeEach(function(){
    // Clear all current users
    Meteor.users.remove({});

    // Create a new test user
    this.newUserId = Accounts.createUser({
      username: 'New User',
      password: 'letmein'
    });

    // Get the Astro class associated with this User
    this.user = User.findOne(this.newUserId);
  });

  afterEach(function() {
    // Clean up
    this.user.remove();
  });

  describe('User Profile', function() {
    it('is defined on creation', function() {
      expect(this.user.get('profile')).toBeDefined();
    });

    it('has channel subscriptions array', function() {
      let channelSubscriptions = this.user.get('profile').channelSubscriptions;
      expect(channelSubscriptions).not.toBeUndefined();
    });

    it('channel subscriptions are initially empty', function(){
      let channelSubscriptions = this.user.get('profile').channelSubscriptions;
      expect(channelSubscriptions.length).toBe(0);
    });
  });
});
