(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginV2Controller);

    /** @ngInject */
    function LoginV2Controller($scope,Auth,$location)
    {
        // Data

        // Methods

      var vm = this;
       vm.signIn=signIn;
        function signIn(formDetail) {
        var email, password="";
         email=formDetail.email;
         password= formDetail.password;
        if (email && email.length > 0 && password && password.length > 0) {
          Auth.login({'email': email, 'password': password}).then(function (user) {
            $scope.currentUser = user;
            $location.path('/dashboard-server');
          }, function (error) {
            $location.path('/dashboard-server');
            console.log(error);
          });
        } else {
          console.log('Length of email or password is not greater than 0');
        }
      };
    }
})();
