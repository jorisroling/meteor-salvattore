Package.describe({
  name: 'jorisroling:salvattore',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Meteor implementation of (salvattore)[http://salvattore.com]',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jorisroling/meteor-salvattore',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('salvattore.js', 'client');
  api.addFiles('salvattore-client.js', 'client');
  api.addFiles('salvattore-client.css', 'client');
  api.addFiles('salvattore-client.html', 'client');
  api.use(['templating', 'spacebars', 'ui'], 'client');
  api.export('salvattore');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jorisroling:salvattore');
  api.addFiles('salvattore-tests.js');
});
