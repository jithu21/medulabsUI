(function ()
{
    'use strict';

    angular
        .module('app.profile', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.profile', {
            url      : '/user/profile',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/profile/profile.html',
                    controller : 'ProfileController as vm'
                }
            },
            bodyClass: 'profile'
        });

        $translatePartialLoaderProvider.addPart('app/main/profile');

        // Navigation
        //msNavigationServiceProvider.saveItem('pages.profile', {
        //    title : 'Profile',
        //    icon  : 'icon-account',
        //    state : 'app.pages_profile',
        //    weight: 6
        //});
    }

})();
