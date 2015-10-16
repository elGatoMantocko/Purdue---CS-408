Template.channel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var channelId = FlowRouter.getParam('id');
    Meteor.subscribe('oneChannel', channelId);
  });
});

Template.channel.helpers({
  channel: function() {
    var channelId = FlowRouter.getParam('id');
    return Channel.findOne(channelId);
  },

  preview: function() {
    var channel = Channel.findOne(FlowRouter.getParam('id'));
    var urls = Meteor.call('/channels/getUrls', channel);
    urls = urls.splice(10, urls.length - 10);
    return urls;
  }
});
