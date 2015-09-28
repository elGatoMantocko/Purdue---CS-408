let collections = {
  channel: Channels
};

let setup = ( options ) => {
  var collection = _getCollection( options.type );
  return collection[ options.method ]( options.query || {}, options.projection || {} );
};

let _getCollection = ( type ) => {
  return collections[ type ];
};

Modules.both.getContent = setup;