(function ()
{
  'use strict';

  /**
   * Main module of the Fuse
   */
  angular
    .module('fuse', [

      'Devise',
      // Core
      'app.core',

      // Navigation
      'app.navigation',

      // Toolbar
      'app.toolbar',

      // Quick panel
      'app.login',
      'app.register',
      'app.quick-panel',
      'app.dashboards',
      // Sample
      'app.sample',
      'app.s3',
      'scDateTime',
      'app.sourceDetail',
      'underscore',
      'app.prescription',
      'app.rules',
      'app.profile',
      'app.reports',
      'app.mail',
      'lfNgMdFileInput'
    ]);
})();
