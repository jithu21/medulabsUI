(function ()
{
    'use strict';

    angular
        .module('app.rules', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider,msNavigationServiceProvider)
    {
        $stateProvider.state('app.rules', {
            url    : '/opinio/compaignManager',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/rules/rules.html',
                    controller : 'RulesController as vm'
                }
            }
        });

      msNavigationServiceProvider.saveItem('fuse.rules', {
        title : 'Campaigns',
        icon  : 'icon-filter',
        state : 'app.rules'
      });
    }

})();
