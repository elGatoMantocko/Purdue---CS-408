Template.home.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('latestChannels');
  });
});

Template.home.helpers({
  channels: function() {
    return Channel.getLatest().fetch();
  }
});
