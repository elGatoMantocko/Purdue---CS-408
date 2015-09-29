// An Astro class used as a nested field in the User class below
UserProfile = Astronomy.createClass({
  name: 'UserProfile',
  /* No collection attribute */
  fields: {

    // An array of Channel ids that the user has subscribed to
    channelSubscriptions: {
      type: 'array',
      nested: 'string',
      default() {
        return [];
      }
    }
  }
});

/*
 * An Astro wrapper around the accounts-password user collection
 * NOTE: This wrapper does not handle any validation rules, but 
 *       let's the accounts-password package handle them. 
 */
User = Astronomy.createClass({
  name: 'User',
  // Use the built-in Accounts' user collection
  collection: Meteor.users,
  fields: {

    // Username
    username: 'string',

    // Array of user's email addresses
    emails: 'array',

    // The date the user was created
    createdAt: 'date',

    // Services applied to this user, such as encrypted password, facebook login info, resume token, etc.
    services: 'object',
    
    // The UserProfile, a storage place for misc. info specific to a single User
    profile: {
      type: 'object',
      nested: 'UserProfile',
      default() {
        return {};
      }
    }
  }
});
