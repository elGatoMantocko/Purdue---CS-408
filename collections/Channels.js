Channels = new Mongo.Collection('channels');

Channel = Astronomy.createClass({
  name: 'Channel',
  collection: Channels,
  fields: {

    /* The title of the Channel */
    title: {
      validator: [
        Validators.required(),
        Validators.string(),
        Validators.maxLength(30)
      ]
    },

    /* The Google Image search query */
    query: {
      validator: [
        Validators.required(),
        Validators.string(),
        Validators.maxLength(250)
      ]
    },

    /* The ID of the creator */
    creator: {
      type: 'string',
      // The ID of the user is set in the 'beforeSave' event
      // It can only be set once!
      immutable: true
    }
  },

  events: {
    beforeInsert: function(e) {
      this.set('creator', Meteor.userId());
    }
  },

  /* createdAt and updatedAt fields */
  behaviors: ['timestamp']
});
