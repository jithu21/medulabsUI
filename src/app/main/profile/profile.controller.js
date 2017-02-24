(function ()
{
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController()
    {
        var vm = this;

      vm.about ={
        general :{
          "gender":"Male",
          "birthday":new Date().toISOString().substring(0, 10),
          "locations":["Bangalore"],
          "about":"Born in Vijayawada"
        },
        work :{
          "occupation":"Software Engineer",
          "skills":"C,C++",
           "jobs":[ {"company":"Kaybus","date":"20th August,2014"}]
        },
        contact:{
          "address":"BTM 1st stage,Banaglore",
          "tel":"+91 9066651549",
          "email":"guptaa.pavan@gmail.com"
        }
      }
      // Methods

        //////////
    }

})();
