Meteor.methods({ 
  /*
   * Reads a Channel and searches for its images
   *
   * @param {channel} the Channel object to read
   * @param {start_page} the starting page number
   * @param {num_pages} the number of pages to grab images
   * @return {Images} an array of image objects
   */
  '/channels/getUrls': function(channel) {
    // Check Arguments
    check(channel, Channel);
 
    images = [];
    images = _.union(images, Modules.server.googleImageSearchSync(channel.get('query')));

    return images;
  }
});
