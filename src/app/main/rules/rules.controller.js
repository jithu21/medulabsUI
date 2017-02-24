(function ()
{
    'use strict';

    angular
        .module('app.rules')
        .controller('RulesController', RulesController);

    /** @ngInject */
    function RulesController()
    {
        var vm = this;
        vm.location = true;



        // Methods

        vm.loadUsers = function(event){
           vm.users =[{"name":"Food"},{"name":"Location"},{"name":"Active"},{"name":"Inactive"}];
        }

      // method to fetch varities under category items

        vm.fetchVarirties = function (user) {
          vm.varityItems=[];
          if(user.name == "Location"){
            vm.varityItems = [{"variety_name":"HSR LAYOUT"},{"variety_name":"SILK BOARD"},{"variety_name":"MARTHALLI"}];
          }
          if(user.name == "Food"){
            vm.varityItems = [{"variety_name":"North Indian Food"},{"variety_name":"South Indian Food"},{"variety_name":"Punjabi"},{"variety_name":"Kolkatta Foods"},{"variety_name":"Andhra Foods"}];
          }
          if(user.name == "Active"){
            vm.varityItems = [{"variety_name":"Area Wise "},{"variety_name":"State Wise"},{"variety_name":"Region Wise"},{"variety_name":"BlockWise"},{"variety_name":"Colony Wise"}];
          }
          if(user.name == "Inactive"){
            vm.varityItems = [{"variety_name":"Area Wise "},{"variety_name":"State Wise"},{"variety_name":"Region Wise"},{"variety_name":"BlockWise"},{"variety_name":"Colony Wise"}];
          }
        }


        vm.listCountries = function(){
          vm.countries = [{"name":"Gujarat"},{"name":"Pakistan"},{"name":"China"},{"name":"India"},{"name":"Bangladesh"}];
        }
        vm.listTypeofUsers=function(){
          vm.userType = [{"type":"List1"},{"type":"List2"},{"type":"List3"},{"type":"List5"},{"type":"List6"},{"type":"List7"}];
        }
        vm.schdulerDetails = function () {
          vm.schduleType = [{"type":"Run Now"},{"type":"Run Weekly"},{"type":"Run Monthly"},{"type":"Run Everyday"},{"type":"Custom Schdule"}]
        }

        vm.myDate =   new Date();

        vm.sendForm = function(){
          alert("CAMPAIGN SAVED AND SCHEDULED");
          location.reload();
        }


    }

})();
