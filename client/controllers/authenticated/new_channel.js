Template.newchannel.onCreated(function() {
  this.data.channel = new Channel();
});

Template.newchannel.events({

  'change input': function(e, tmpl) {
    e.preventDefault();

    var field = e.currentTarget;
    this.channel.set(field.id, field.value);
  },

  'submit form': function(e, tmpl) {
    e.preventDefault();

    if (this.channel.validate()) {
      Meteor.call('/channels/new', this.channel, function(err, res) {
        if (err) this.channel.catchValidationException();
        FlowRouter.go('/channels/' + res._id);
      });
    }
  }

});
