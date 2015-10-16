Template.channel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var channelId = FlowRouter.getParam('id');
    self.subscribe('oneChannel', channelId);
  });

  self.urls = new ReactiveVar([]);
});

Template.channel.helpers({
  channel: function() {
    var channelId = FlowRouter.getParam('id');
    return Channel.findOne(channelId);
  },

  preview: function() {
    var self = Template.instance();
    var channel = Channel.findOne(FlowRouter.getParam('id'));
    var thing = Meteor.call('/channels/getUrls', channel, function(err, res) {
      self.urls.set(res);
    });
    return self.urls.get();
  }
});
