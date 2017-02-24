(function ()
{
    'use strict';

    angular
        .module('app.s3')
        .controller('S3Controller', FormsController);

    /** @ngInject */
    function FormsController($mdDialog,$scope,$compile,$http)
    {
        var vm = this;

        // Data
        vm.basicForm = {};
        vm.formWizard = {};
        vm.showConnectorConfig=false;
        vm.showExistingConnectors=true;

       // Declare Delimiter to be hidden by default
        vm.showDelimiter= false;
      vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
      'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
      'WY').split(' ').map(function (state)
      {
        return {abbrev: state};
      });
      vm.formWizard.fileFormat="";
      vm.fileFormats= ["CSV", "TSV", "Others"];
      vm.formWizard.source="s3";
       // Definition of Selecting Other file types
        vm.selectedOthers=selectedOthers;
      // Definition of Selecting  Required file types
        vm.selectRequired=selectRequired;
        vm.showS3=showS3;
        vm.showAutomatic=showAutomatic;
        vm.showManual=showManual;
        vm.showFTP=showFTP;
        vm.addField= addField;
        vm.processFile= processFile;
        vm.showContent=showContent;
        vm.startDate=startDate;
        vm.endDate=endDate;
        vm.removes3=removes3;
        vm.removeftp=removeftp;
        vm.showConnector=showConnector;
        vm.showAllConnectors=showAllConnectors;
        vm.formWizard.fieldName=[];
        vm.formWizard.fieldType=[];
        vm.seperator="";
        vm.ftp=false;
        vm.s3=true;
         function  showConnector(){
           vm.showConnectorConfig=true;
           vm.showExistingConnectors=false;
         }
         function showAllConnectors(){
           vm.showConnectorConfig=false;
           vm.showExistingConnectors=true;
         }
         function endDate($value){
           console.log($value);
         }
         function startDate($value){
           console.log($value);
         }
         function showFTP(){
            vm.ftp=true;
            vm.s3=false;
           //var templateFtp='<div  ng-show="vm.ftp" layout="row" layout-gt-xs="column"><md-input-container flex="100" flex-gt-xs="33"><input type="text" name="hostname" ng-model="vm.formWizard.hostname" placeholder="Host Name / IP / URL" required></md-input-container> <md-input-container flex="100" flex-gt-xs="33"> <input type="text" name="username" ng-model="vm.formWizard.username" placeholder="User Name" required> </md-input-container> <md-input-container flex="100" flex-gt-xs="33"> <input type="password" name="password" ng-model="vm.formWizard.password"placeholder="Password"required> </md-input-container> </div>'
          // angular.element(document.querySelectorAll("#fillS3")).empty();
          // angular.element(document.querySelectorAll("#fillFtp")).empty();
         //  angular.element(document.querySelectorAll('#fillFtp')).append($compile(templateFtp)($scope));
         }
        function removes3(){
          vm.formWizard.bucketName="h";
          vm.formWizard.accessKey="p";
          vm.formWizard.accessToken="u";
          angular.element(document.querySelectorAll("#fillS3")).empty();
        }
      function removeftp(){
        vm.formWizard.hostname="h";
        vm.formWizard.password="p";
        vm.formWizard.username="u";
        angular.element(document.querySelectorAll("#fillFtp")).empty();
      }

        function  processFile(lines){
          vm.fieldCount=0;
              var allFields=[];
          for(var i =0; i<lines.length ; i++){
            allFields.push(fieldsList()+"<br>");
          }
          return allFields.join("");
        }

         function showContent($fileContent){
           var sep="\t";
                if(vm.formWizard.fileFormat.indexOf("csv") > -1){
                   sep=",";
                }else if(vm.formWizard.fileFormat.indexOf("tsv")> -1){
                  sep="\t"
                }else if(vm.formWizard.fileFormat.indexOf("others")>-1){
                  sep= vm.formWizard.delimiter;
                }
           var allTextLines = $fileContent.split(/\r\n|\n/);
           var headers = allTextLines[0].split(sep);
           var lines = [];

           for (var i=2; i<3; i++) {
             var data = allTextLines[i].split(sep);
             if (data.length == headers.length) {
               var tarr = [];
               for (var j=0; j<headers.length; j++) {
                   var type="string";
                  if(!isNaN(Number(data[j]))){
                        type="number"
                  }
                  var regex = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.](\d{4})\s([0-9]|[0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$/)
                  if(regex.test(data[j])){
                      type="Date"
                  }
                 if(data[j].indexOf("true")>0  || data[j].indexOf("false") >0){
                     type="boolean"
                 }
                 tarr.push(type);
               }
               lines.push(tarr);
             }
           }
           angular.element(document.querySelectorAll('#autoMap')).append($compile(processFile(lines[0]))($scope));
           populateAutoFields(lines[0], headers)
         }

         function populateAutoFields(types, headers){
            for( var i=0; i<types.length;i++){
              vm.formWizard.fieldName[i]=headers[i];
              vm.formWizard.fieldType[i]=types[i];
            }
         }

        vm.fieldCount=0;

         function fieldsList(){
             var fieldTemplate= '<div layout="row" layout-align="space-around end"><div><md-input-container> <label> Field Name</label> <input  ng-model="vm.formWizard.fieldName['+vm.fieldCount+']"> </md-input-container></div> <div style="margin-bottom: 25px"> <md-input-container><label>Data Type</label> <md-select ng-model="vm.formWizard.fieldType['+vm.fieldCount +']"> <md-option value="string">String</md-option> <md-option value="number">Number</md-option> <md-option value="date">Date</md-option> <md-option value="boolean">Boolean</md-option> </md-select></md-input-container> </div> </div>'
              vm.fieldCount++;
             return fieldTemplate;
         }
          function addField(){
            angular.element(document.querySelectorAll('#mapList')).append($compile(fieldsList())($scope));
          }
         function  showAutomatic(){
           vm.formWizard.isManual=false;
           vm.formWizard.isAutomatic=true;
         }
          function  showManual(){
            vm.formWizard.isManual=true;
            vm.formWizard.isAutomatic=false;
          }



      vm.customer_health= function(time,user_id,event, event_type, product_id, price, phrase, order_id) {
        $http({
          method: 'GET',
          url: '',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
          }
        }).success(function (data) {
          if (data) {

          }
        }).error(function (data, status, headers, config) {

        });

      };

        function showS3(){
          vm.ftp=false;
          vm.s3=true;
         // angular.element(document.querySelectorAll("#fillS3")).empty();
          //angular.element(document.querySelectorAll("#fillFtp")).empty();
         // var template_s3= '<div  ng-show="vm.s3" layout="row" layout-gt-xs="column"><md-input-container flex="100" flex-gt-xs="33"><input type="text" name="bucketName" ng-model="vm.formWizard.bucketName" placeholder="Bucket Name" required></md-input-container><md-input-container flex="100" flex-gt-xs="33"><input type="text" name="accessKey" ng-model="vm.formWizard.accessKey" placeholder="Access Key" required md-maxlength="20"></md-input-container><md-input-container flex="100" flex-gt-xs="33"><input type="text" name="accessToken" ng-model="vm.formWizard.accessToken" placeholder="Access Token" required md-maxlength="40"></md-input-container></div>'
          //angular.element(document.querySelectorAll('#fillS3')).append($compile(template_s3)($scope));
        }
         function  selectedOthers(){
           vm.showDelimiter= true;
           angular.element(document.querySelectorAll("#customDelimiter")).empty();
           var template= ' <div layout="column" ng-show="vm.showDelimiter" layout-gt-sm="row" flex> <label flex="100" flex-gt-xs="50" style="padding-left:71px;">Enter the Custom Delimiter </label><md-input-container flex="50" flex-gt-xs="50"> <input type="text" style="width:122px" name="delimiter"ng-model="vm.formWizard.delimiter" placeholder="Custom Delimiter"required>  <div  ng-if="vm.showDelimiter" ng-messages="wizardStep1.delimiter.$error" ng-show="wizardStep1.delimiter.$touched"role="alert"> <div ng-message="required"> <span>Custom Delimiter field is required.</span> </div> </div> </md-input-container> </div>'
           angular.element(document.querySelectorAll('#customDelimiter')).append($compile(template)($scope));
         }
         function  selectRequired(){
           vm.showDelimiter= false;

         }

      vm.connectors = [
        {
           "_id":1,
          "source": "S3",
          "format": "TSV",
          "objectname": "Temperature",
          "createdAt": "2015/07/21"
        },
        {
          "_id":2,
          "source": "ftp",
          "format": "CSV",
          "objectname": "Student",
          "createdAt": "2015/07/21"
        },
        {
          "_id":3,
          "source": "S3",
          "format": "others",
          "objectname": "Account",
          "createdAt":"2015/07/21"
        },
        {
          "_id":4,
          "source": "ftp",
          "format": "CSV",
          "objectname": "Sales",
          "createdAt": "2015/07/21"
        },
        {
          "_id":5,
          "source": "S3",
          "format": "TSV",
          "objectname": "Analytics",
          "createdAt": "2015/07/21"
        },
        {
          "_id":5,
          "source": "ftp",
          "format": "CSV",
          "objectname": "Grades",
          "createdAt": "2015/07/21"
        }
      ];
       //vm.connectors=[];
      if(vm.connectors.length >0){
        vm.fillTable=true;
      }else {
        vm.fillTable=false;
      }

      vm.dtOptions = {
        dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
        pagingType: 'simple',
        autoWidth : false,
        responsive: true
      };



      vm.customer_slab= customer_slab;

      function customer_slab() {
        $http({
          method: 'GET',
          url: 'http://172.31.98.153:8080/userLocationBudget',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
          }
        }).success(function (data) {
          if (data) {
            var labels=[];
            var series=[];
            var s1=[];
            for( var i =0 ; i <data.length; i++){
               if(!(data[i].city in labels)){
                 labels.push(data[i].city);
               }
              if(!(data[i].budget in series)){
                series.push(data[i].budget);
              }

              s1.push([data[i].totalCustomer]);
            }
            //vm.lineChart ={
            //  labels :labels,
            //  series :series,
            //  data :s1
            //}
            vm.lineChart = {
              labels: ['Karnataka', 'Maharastra', 'Kerala', 'Andhra Pradesh', 'Telangana'],
              series: ['Top', 'Middle', 'Low'],
              data  : [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90],
                [20, 43, 50, 19, 46, 7, 80]
              ]
            };

          }
        }).error(function (data, status, headers, config) {

        });
      };


      vm.customer_slab();

      // Methods
        vm.sendForm = sendForm;

        //////////

        /**
         * Send form
         */
        function sendForm(ev)
        {

           debugger;
          if(vm.formWizard.source.indexOf("s3")>-1){
            delete vm.formWizard["hostname"];
            delete vm.formWizard["password"];
            delete vm.formWizard["username"];
          }
          if(vm.formWizard.source.indexOf("ftp")> -1){
            delete vm.formWizard["bucketName"];
            delete vm.formWizard["accessKey"];
            delete vm.formWizard["accessToken"];
          }

            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    }
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {


                    formWizardData: vm.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.formWizard = {};
        }
    }
})();
