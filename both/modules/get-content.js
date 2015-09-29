/* 
 * Module for grabbing the images from Google
 *
 * @param {Channel} the Channel object that contains the query
 * @return {Images} an array of images returned from the search
 */

let setup = ( channel ) => {
  var GoogleImages = Meteor.npmRequire('google-images');
  var Future = Meteor.npmRequire('fibers/future');
  var fut = new Future();
  GoogleImages.search(channel.get('query'), function(err, images) {
    if (err) return console.log(err);

    fut.return(images);
  });
  return fut.wait();
};

/*
 * Method to return only the urls of the images
 *
 * @param {Channel} the channel to grab the query from
 * @return {String[]} an array of urls
 */
let urlsOnly = (channel) => {
  // Grabs the necessary packages
  var GoogleImages = Meteor.npmRequire('google-images');
  var Future = Meteor.npmRequire('fibers/future');

  // We need to make a Future object because the search async call needs to be synchronous
  var fut = new Future();
  GoogleImages.search(channel.get('query'), function(err, images) {
    if (err) return console.log(err);
    var urls = [];
    for (i = 0; i < images.length; i++) {
      urls.push(images[i].url);
    }
    fut.return(urls);
  });
  return fut.wait();

};

Modules.both.getUrls = urlsOnly;
Modules.both.getImages = setup;
