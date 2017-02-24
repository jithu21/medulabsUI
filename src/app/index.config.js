(function ()
{
  'use strict';

  angular
    .module('fuse')
    .config(config);

  /** @ngInject */
  function config(AuthProvider,configUrl)
  {
    //AuthProvider.loginPath(configUrl.url+'/users/sign_in');
    //AuthProvider.loginMethod('POST');
    //AuthProvider.logoutPath(configUrl.url+'/users/sign_out');
    //AuthProvider.logoutMethod('DELETE');
    //AuthProvider.registerPath(configUrl.url+'/users');
    //AuthProvider.registerMethod('POST');
    //AuthProvider.resourceName('users');
  }

})();
