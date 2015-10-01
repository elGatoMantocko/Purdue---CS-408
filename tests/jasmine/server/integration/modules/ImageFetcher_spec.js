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

  afterEach(function() {
    // Remove any channels we've created
    Channel.remove({});
  });

  it('should return 64 urls from the channel query', function() {
    let channel = new Channel({
      title: 'My Test Channel',
      query: 'little flower ponies'
    });
    channel.save();
    spyOn(Modules.server.GoogleImageSearcher, 'search').and.returnValue([ 'http://www.strawberryreef.com/images/Ponies/FIM/FlowerWishesFIMpv_300_L_collec-jcg.jpg','http://vignette3.wikia.nocookie.net/mlp/images/f/fc/HappyStudio_Flower.png/revision/latest%3Fcb%3D20120409185344','http://www.hasbro.com/common/productimages/en_US/4d36402f50569047f557a7d9ba55adfb/3cf0e0cfa0a7b293517b5389a5ba149ea7bb6635.jpg','http://www.strawberryreef.com/images/Ponies/FIM/FlowerWishesFIMfav_L_unknown.jpg']);

    urls = Meteor.call('/channels/getUrls', channel);
    expect(urls.length).toEqual(64);
    for (i = 0; i < urls.length; i++) {
      expect(urls[i]).not.toEqual('');
    }

    // Clean up 
    channel.remove();
  });
});
