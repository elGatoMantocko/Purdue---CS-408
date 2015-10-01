describe('image fetcher', function() {
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

  it('should return 64 urls from the channel query', function() {
    let channel = new Channel({
      title: 'My Test Channel',
      query: 'little flower ponies'
    });
    channel = Meteor.call('/channels/new', channel);

    // spyOn(Modules.server.GoogleImageSearcher, 'search').returnValue();

    urls = Meteor.call('/channels/getUrls', channel);
    console.log(urls);
    expect(urls.length).toEqual(64);
    for (i = 0; i < urls.length; i++) {
      expect(urls[i]).not.toEqual('');
    }

    // Clean up 
    channel.remove();
  });
});
