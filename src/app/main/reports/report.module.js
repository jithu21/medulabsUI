(function ()
{
    'use strict';

    angular
        .module('app.reports', [
        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.report_liver', {
                url      : '/health/liver/report',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/reports/liverreport.html',
                        controller : 'ReportController as vm'
                    }
                }
            })
            .state('app.report_kidney', {
                url      : '/health/report/kidney',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/reports/kidneyreport.html',
                        controller : 'ReportController as vm'
                    }
                }
            })
            .state('app.report_cbc', {
                url      : '/health/report/cbc',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/reports/cbcreport.html',
                        controller : 'ReportController as vm'
                    }
                }
            })
            .state('app.report_lipid', {
              url      : '/health/report/lipid',
              views    : {
                'content@app': {
                  templateUrl: 'app/main/reports/lipidreport.html',
                  controller : 'ReportController as vm'
                }
              }
            });



        // Navigation
        msNavigationServiceProvider.saveItem('reports', {
            title : 'Reports',
            icon  : 'icon-view-stream',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('reports.liver', {
            title: 'Liver',
            state: 'app.report_liver'
        });

        msNavigationServiceProvider.saveItem('reports.kidney', {
            title: 'Kidney',
            state: 'app.report_kidney'
        });

        msNavigationServiceProvider.saveItem('reports.cbc', {
            title: 'CBC',
            state: 'app.report_cbc'
        });
         msNavigationServiceProvider.saveItem('reports.lipid', {
          title: 'Lipid',
          state: 'app.report_lipid'
        });
    }

})();
