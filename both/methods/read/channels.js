Meteor.methods({
  /*
   * Reads a Channel and searches for its images
   *
   * @param {Channel} the Channel object to read
   * @param {start_page} the starting page number
   * @param {num_pages} the number of pages to grab images
   * @return {Images} an array of image objects
   */
  '/channels/images': function(channel, start_page, num_pages) {
    // Check Arguments
    check(channel, Channel);
    check(start_page, Number);
    check(num_pages, Number);
    // Check if the user is logged in? Not sure this is necessary
    // if(!Meteor.user()) throw new Meteor.Error('logged-out','You must be logged in to create a channel.');
    
    if (channel.validate()) {
      images = [];
      for (var i = start_page; i = num_pages; i++) {
        images = images.concat(Modules.both.getImages(channel, i));
      }
      return images;
    } else {
      channel.throwValidationsException();
    }
  },
  /*
   * Reads a Channel and searches for its images
   *
   * @param {Channel} the Channel object to read
   * @param {start_page} the starting page number
   * @param {num_pages} the number of pages to grab images
   * @return {Images} an array of image objects
   */
  '/channels/getUrls': function(channel, start_page, num_pages) {
    // Check Arguments
    check(channel, Channel);
    check(start_page, Number);
    check(num_pages, Number);

    // Check if the user is logged in? Not sure this is necessary
    // if(!Meteor.user()) throw new Meteor.Error('logged-out','You must be logged in to create a channel.');
    
   if (channel.validate()) {
      images = [];
      for (var i = start_page; i < num_pages; i++) {
        images = images.concat(Modules.both.getUrls(channel, i));
      }
      return images;
    } else {
      channel.throwValidationsException();
    }
  }
});
