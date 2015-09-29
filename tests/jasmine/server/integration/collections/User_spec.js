describe('User class', function() {

  beforeEach(function(){
    // Clear all current users
    Meteor.users.remove({});

    // Clear all channels
    Channel.remove({});

    // Create a new test user
    this.newUserId = Accounts.createUser({
      username: 'New User',
      password: 'letmein'
    });

    // Get the Astro class associated with this User
    this.user = User.findOne(this.newUserId);

    // Fake the login for this user
    this.userSpy = spyOn(Meteor, 'user').and.returnValue(this.user);
    this.userIdSpy = spyOn(Meteor, 'userId').and.returnValue(this.user._id);
  });

  afterEach(function() {
    // Clear all current users
    Meteor.users.remove({});

    // Clear all channels
    Channel.remove({});
  });

  it('can subscribe to channels', function() {
    // Create a new channel
    let channel = new Channel({
      title: 'Fake channel',
      query: 'galaxies'
    });
    channel.save();
    this.user.subscribeTo(channel);
    expect(this.user.getSubscriptions()).toContain(channel);
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
