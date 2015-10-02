Package.describe({
  name: 'fixtures',
  summary: 'App fixtures for testing',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript@0.1.4');
  api.addFiles('fixtures.js');
});
