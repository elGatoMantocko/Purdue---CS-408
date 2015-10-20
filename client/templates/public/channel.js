Template.channel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var channelId = FlowRouter.getParam('id');

    self.subscribe('oneChannel', channelId);
    var channel = Channel.findOne(channelId);

    self.urls = new ReactiveVar([]);

    if (channel) {
      Meteor.call('/channels/getUrls', channel, (err, res) => {
        if (err) {
          throw err;
        }
        self.urls.set(res);
      });
    }
  });

});

Template.channel.helpers({
  channel: function() {
    var channelId = FlowRouter.getParam('id');
    return Channel.findOne(channelId);
  },
  preview: function() {
    return Template.instance().urls.get();
  }
});
