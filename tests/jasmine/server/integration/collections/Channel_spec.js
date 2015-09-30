describe('Channel collection', function() {

  /*
   * Set up some fake user credentials and spies to simulate logging in
   */
  beforeEach(function() {
    this.fakeUser = {
      _id: '12345',
      username: 'Fakey'
    };
    this.userIdSpy = spyOn(Meteor, 'userId').and.returnValue(this.fakeUser._id);
  });

  afterEach(function() {
    // Remove any channels we've created
    Channel.remove({});
  });

  it('can correctly save a document', function() {
    let channel = new Channel({
      title: 'Save Test',
      query: 'save'
    });

    channel.save();

    // We should be able to find that document
    expect(Channel.find({title: 'Save Test'}).count()).toEqual(1);
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
      channel.save();
      expect(channel.get('creator')).toEqual(this.fakeUser._id);
    });

    it('can not be set again after initial insertion', function() {
      let channel = new Channel({
        title: 'My Test Channel',
        query: 'little flower ponies'
      });
      channel.save();

      channel.set('creator', 'a different id');

      expect(channel.get('creator')).not.toEqual('a different id');
    });
  });

});
