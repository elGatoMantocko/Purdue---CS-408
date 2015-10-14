Package.describe({
  name: 'fixtures',
  summary: 'App fixtures for testing',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript@0.1.4');
  api.use('digilord:faker@1.0.7');
  api.use('mongo@1.1.1', 'server');
  api.use('browser-policy@1.0.5');
  api.use('kadira:flow-router@2.7.0');
  api.addFiles('fixtures.js', 'server');
  api.addFiles('routes.js', 'client');
  api.addFiles('browser_policy.js', 'server');
});
