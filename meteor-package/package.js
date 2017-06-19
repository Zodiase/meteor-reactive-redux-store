Package.describe({
  name: 'zodiase:reactive-redux-store',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Create Redux stores that are reactive sources.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zodiase/meteor-reactive-redux-store.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md',
});

Package.onUse(function(api) {
  api.use('ecmascript@0.8.0');
  api.use('tracker@1.1.3');
  api.use('tmeasday:check-npm-versions@0.3.1');
  api.mainModule('index.js');
});
