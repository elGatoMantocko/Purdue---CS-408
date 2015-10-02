Template.newchannel.onCreated(function() {
  this.channel = new Channel();
});

Template.newchannel.events({

  'change input': function(e, tmpl) {
    e.preventDefault();

    var field = e.currentTarget;
    this.channel.set(field.id, field.value);
    console.log(this.channel);
  },

  'submit form': function(e, tmpl) {
    e.preventDefault();

    console.log(this.channel);

    Meteor.call('/channels/new', this.channel, function(err, res) {
      if (err) this.channel.catchValidationException();
      FlowRouter.go('/channels/' + res._id);
    });
  }

});
