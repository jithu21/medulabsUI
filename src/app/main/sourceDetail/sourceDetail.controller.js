(function ()
{
    'use strict';

    angular
        .module('app.sourceDetail')
        .controller('sourceDetailController', sourceDetailController);

    /** @ngInject */
    function sourceDetailController($stateParams,$mdDialog,$document,_,$compile,$scope)
    {
        var vm = this;



          vm.objectname="New Rule";
           vm.text=false;
           vm.number=false
          vm.source="S3";
          vm.saveTask=saveTask;
          vm.schema ={ "Bid Rate" :"Number", "Clear Price":"Number", "Brand Name": "String", "TimeStamp":"Date",
            "State" :"String", "Win Rate":"Number", "Country": "String",  "Type":"String"
          };
           vm.options=["Equals", "Not Equals"];
          vm.optionsNumber=["Equals", "Not Equals", "Greater Than", "Less Than"];

           vm.rulesList=[ { "rulename":"Bid Rate Greater than 10", "objectname":"Bids", "field":"Bid Rate", "createdAt":"2015/12/10"},
             { "rulename":"Clear Price Greater than 0", "objectname":"Bids", "field":"Clear Price", "createdAt":"2015/12/13"}]
          vm.rules= 10;
           vm.openTaskDialog=openTaskDialog;

          vm.objectId=$stateParams.objectId;
         vm.fields=_.keys(vm.schema);
         vm.selectedField=selectedField;

         function selectedField(){
              if(vm.schema[vm.choosenField].indexOf("Number")>-1){
                vm.text=false;
                vm.number=true;
              }else if(vm.schema[vm.choosenField].indexOf("String")>-1){
                vm.text=true;
                vm.number=false
              };


         }
        // Data

          function saveTask(){
            vm.rulesList.push({ "createdAt":"2015/12/28", "objectname":"Bids", "field":vm.choosenField, "rulename":vm.RuleName});
             var temp='<tr ng-repeat="x in ::vm.rulesList"><td >{{ x.rulename }}</td><td >{{ x.field }}</td><td >{{ x.objectname }}</td><td >{{x.createdAt}}</td> </tr>'
            angular.element(document.querySelectorAll('#BodyTable')).empty();
            angular.element(document.querySelectorAll('#BodyTable')).append($compile(temp)($scope));

            $mdDialog.hide();
          }


        // Methods
      function openTaskDialog(ev, task)
      {
        $mdDialog.show({
          controller         : 'sourceDetailController',
          controllerAs       : 'vm',
          templateUrl        : 'app/main/sourceDetail/rule.html',
          parent             : angular.element($document.body),
          targetEvent        : ev,
          clickOutsideToClose: true,
          locals             : {
            Task : task,
            Tasks: vm.tasks,
            event: ev
          }
        });
      }

        //////////
    }

})();
