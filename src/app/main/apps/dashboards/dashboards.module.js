(function ()
{
    'use strict';

    angular
        .module('app.dashboards', [
            'app.dashboards.project',
            'app.dashboards.server',
            'app.dashboards.analytics'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('apps', {
            title : 'HEALTH DASHBOARD',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.dashboards', {
            title : 'Dashboards',
            icon  : 'icon-tile-four',
            weight: 1
        });


        msNavigationServiceProvider.saveItem('apps.dashboards.server', {
            title: 'Health Insights',
            state: 'app.dashboards_server'
        });

      msNavigationServiceProvider.saveItem('apps.dashboards.project', {
        title: 'Vaccination Schedule',
        state: 'app.dashboards_project'
      });

    }

})();
