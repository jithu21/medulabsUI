(function ()
{
    'use strict';

    angular
        .module('app.s3', [])
        .directive('onReadFile', function ($parse) {
          return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attrs) {
              var fn = $parse(attrs.onReadFile);

              element.on('change', function(onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function(onLoadEvent) {
                  scope.$apply(function() {
                    fn(scope, {$fileContent:onLoadEvent.target.result});
                  });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
              });
            }
          };
        })
        .config(config);

    /** @ngInject */
    function config($stateProvider,msNavigationServiceProvider)
    {
        $stateProvider.state('app.s3', {
            url      : '/opinio/customers',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/s3/s3.html',
                    controller : 'S3Controller as vm'
                }
            },
            bodyClass: 'forms'
        });
    }




})();
