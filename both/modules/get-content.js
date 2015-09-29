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

Modules.both.getImages = setup;
