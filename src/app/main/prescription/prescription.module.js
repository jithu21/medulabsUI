(function ()
{
    'use strict';

    angular
        .module('app.prescription', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider,msNavigationServiceProvider)
    {
        $stateProvider.state('app.prescription', {
            url    : '/health/prescription',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/prescription/prescription.html',
                    controller : 'prescriptionController as vm'
                }
            },
            resolve: {
                Employees: function (apiResolver)
                {
                    return [];
                }
            }
        });
      msNavigationServiceProvider.saveItem('fuse.users', {
        title : 'Prescriptions ',
        icon  : 'icon-account-multiple',
        state : 'app.prescription'
      });
    }

})();
