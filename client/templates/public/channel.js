Template.channel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var channelId = FlowRouter.getParam('id');
    Meteor.subscribe('oneChannel', channelId);
  });

  self.urls = new ReactiveVar([]);
});

Template.channel.helpers({
  channel: function() {
    var channelId = FlowRouter.getParam('id');
    return Channel.findOne(channelId);
  },

  preview: function() {
    var channel = Channel.findOne(FlowRouter.getParam('id'));
    Meteor.call('/channels/getUrls', channel, (err, res) => {
      if (err) {
        throw err;
      }
      this.urls.set(res.splice(10, res.length - 10));
      
    });
    return this.urls;
  }
});
