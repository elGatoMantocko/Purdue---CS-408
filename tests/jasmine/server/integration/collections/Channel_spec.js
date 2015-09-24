describe('Channel collection', function() {

  /*
   * Set up some fake user credentials and spies to simulate logging in
   */
  beforeEach(function() {
    this.fakeUser = {
      _id: '12345',
      username: 'Fakey'
    };
    this.userSpy = spyOn(Meteor, 'user').and.returnValue(this.fakeUser);
    this.userIdSpy = spyOn(Meteor, 'userId').and.returnValue(this.fakeUser._id);
  });

  it('can correctly save a document', function() {
    let channel = new Channel({
      title: 'Save Test',
      query: 'save'
    });

    channel = Meteor.call('/channels/new', channel);

    // We should be able to find that document
    expect(Channel.find({title: 'Save Test'}).count()).toEqual(1);

    // Clean up
    channel.remove();
  });

  it('throws if we are NOT logged in', function() {
    // Call through to the original Meteor.user() implementation
    //   This will return 'null' because we're obviously not logged in
    this.userSpy.and.callThrough();
    let channel = new Channel({
      title: 'Logged out',
      query: 'Should throw'
    });

    try {
      Meteor.call('/channels/new', channel);
      fail('method should throw if we are not logged in');
    } catch(e) {
      // Test succeeded
    }
  });


  describe('title field', function() {
    it('requires the title', function() {
      let channel = new Channel({
        // Don't set the title
        query: 'query'
      });
      expect(channel.validate()).toBe(false);
    });

    it('requires that the title is a string', function() {
      let channel = new Channel({
        title: 42,
        query: 'query'
      });
      expect(channel.validate()).toBe(false);
    });

    it('requires that the title is at least 3 characters', function() {
      let channel = new Channel({
        title: 'no',
        query: 'query'
      });
      expect(channel.validate()).toBe(false);
    });

    it('requires that the title is at most 30 characters', function() {
      let channel = new Channel({
        // 30 Characters
        title: Array(31).join('A'),
        query: 'query'
      });
      expect(channel.validate()).toBe(true);
      channel.set({
        // 31 characters
        title: Array(32).join('A')
      });
      expect(channel.validate()).toBe(false);
    });
  });

  describe('query field', function() {
    it('requires the query field', function() {
      let channel = new Channel({
        title: 'Query Test'
        // Empty query field
      });
      expect(channel.validate()).toBe(false);
    });

    it('requires that the query field is a string', function() {
      let channel = new Channel({
        title: 'Query Test',
        query: 42
      });
      expect(channel.validate()).toBe(false);
    });

    it('requires that the query field is at most 250 characters', function() {
      let channel = new Channel({
        title: 'Query Test',
        // 250 characters
        query: Array(251).join('A')
      });
      expect(channel.validate()).toBe(true);
      channel.set({
        // 251 characters
        query: Array(252).join('A')
      });
      expect(channel.validate()).toBe(false);
    });
  });

  describe('creator field', function() {

    it('should be automatically set when we are logged in', function() {
      let channel = new Channel({
        title: 'My Test Channel',
        query: 'little flower ponies'
      });
      expect(channel.validate()).toBe(true);
      channel = Meteor.call('/channels/new', channel);
      expect(channel.get('creator')).toEqual(this.fakeUser._id);

      // Clean up
      channel.remove();
    });

    it('can not be set again after initial insertion', function() {
      let channel = new Channel({
        title: 'My Test Channel',
        query: 'little flower ponies'
      });
      channel = Meteor.call('/channels/new', channel);

      channel.set('creator', 'a different id');

      expect(channel.get('creator')).not.toEqual('a different id');

      // Clean up
      channel.remove();
    });
  });

});
