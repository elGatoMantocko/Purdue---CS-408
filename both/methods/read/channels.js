Meteor.methods({ 
  /*
   * Reads a Channel and searches for its images
   *
   * @param {Channel} the Channel object to read
   * @param {start_page} the starting page number
   * @param {num_pages} the number of pages to grab images
   * @return {Images} an array of image objects
   */
  '/channels/getUrls': function(channel) {
    // Check Arguments
    check(channel, Channel);
 
    images = [];
    for (var i = 0; i < 16; i++) {
      images = images.concat(Modules.server.getUrls(channel, i));
    }
    return images;
  }
});
