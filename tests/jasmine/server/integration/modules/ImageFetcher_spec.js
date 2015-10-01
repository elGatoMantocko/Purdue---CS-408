describe('image fetcher', function() { 
  it('should return 64 urls from the channel query', function() {
    let channel = new Channel({
      title: 'My Test Channel',
      query: 'little flower ponies'
    });
    channel = Meteor.call('/channels/new', channel);

    urls = Meteor.call('/channels/getUrls', channel);
    expect(urls.length).toEqual(64);
    for (i = 0; i < urls.length; i++) {
      expect(urls[i]).not.toEqual('');
    }

    // Clean up 
    channel.remove();
  });
});
