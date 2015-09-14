(function () {
    'use strict';

    var app = angular.module('SRAN-BBD-app', []);

    app.controller('SRANBBDController', ['$scope', '$http', function ($scope, $http) {
        


        $scope.data;
        
        $scope.dataUrl = 'http://localhost:4000/api/configurations';
        $scope.getData = function () {
                $http({method: 'GET', url: $scope.dataUrl}).then(function (response) {
                    $scope.status = response.status;
                    $scope.data = response.data;
                     // console.log('jas'+$scope.data);
                });
            };


        // CHECKBOX Variables and Functions
        $scope.isRCSChecked = false;
        $scope.isECSChecked = false;
        $scope.isBCShecked = false;
        $scope.rcsCheck = function(){
            $scope.isRCSChecked=!$scope.isRCSChecked
        }
        $scope.bcsCheck = function(){
            $scope.isBCShecked=!$scope.isBCShecked
        }
        $scope.ecsCheck = function(){
            $scope.isECSChecked=!$scope.isECSChecked
        }

        $scope.allRcsNotZero = function(product){
            return !(product["LTE BB capacity"]['#RCS'] === 0);
        }
        $scope.allBcsNotZero = function(product){
            return !(product["LTE BB capacity"]['#BCS'] === 0);
        }
        $scope.allEcsNotZero = function(product){
            return !(product["LTE BB capacity"]['#ECS'] === 0);
        }

        $scope.isWCDMAChecked = false;
        $scope.isLTEChecked = false;
        $scope.isGSMChecked = false;
        $scope.wcdmaCheck = function(){
            $scope.isWCDMAChecked=!$scope.isWCDMAChecked
        }
        $scope.lteCheck = function(){
            $scope.isLTEChecked=!$scope.isLTEChecked
            if(!$scope.isLTEChecked){
                $scope.isRCSChecked = false;
                $scope.isECSChecked = false;
                $scope.isBCShecked = false;
            }
        }
        $scope.gsmCheck = function(){
            $scope.isGSMChecked=!$scope.isGSMChecked
        }

        $scope.isWCDMA = function(product){
            return product['SBTS SM mode'].indexOf('W') !== -1;
        }
        $scope.isLTE = function(product){
            // alert($scope.isLTEChecked)
            return product['SBTS SM mode'].indexOf('L') !== -1;
        }
        $scope.isGSM = function(product){
            return product['SBTS SM mode'].indexOf('G') !== -1;
        }


        //output something chuchu
        $scope.outputs = [
    {  
      "SM config ID":"SM_G1",
      "SBTS SM mode":"G",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF",
      "SM1 deployment":{  
         "FSMF_1":"GSM",
         "FBBx_1.1":"-",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":24
      }
   },
   {  
      "SM config ID":"SM_G2",
      "SBTS SM mode":"G",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"GSM",
         "FBBx_1.1":"GSM1)",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":24
      }
   },
   {  
      "SM config ID":"SM_L1",
      "SBTS SM mode":"L",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBC+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"LTE",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"LTE"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":3,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_L2",
      "SBTS SM mode":"L",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBC+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"LTE",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"LTE"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":1,
         "#ECS":1
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_L2",
      "SBTS SM mode":"L",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"LTE",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":2,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_L2",
      "SBTS SM mode":"L",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"LTE",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":1
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_L2",
      "SBTS SM mode":"L",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF",
      "SM1 deployment":{  
         "FSMF_1":"LTE",
         "FBBx_1.1":"-",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":1,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_W",
      "SBTS SM mode":"W",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"WCDMA"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":17.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_W",
      "SBTS SM mode":"W",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF+FBBA/C",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":11.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_W",
      "SBTS SM mode":"W",
      "No. of RATs":1,
      "SBTS SM configuration":"FSMF",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"-",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":5.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_WG",
      "SBTS SM mode":"WG",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C",
      "SM1 deployment":{  
         "FSMF_1":"WG",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"WCDMA"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":15.5
      },
      "GSM BB capacity":{  
         "#TRXs":24
      }
   },
   {  
      "SM config ID":"SM_WG",
      "SBTS SM mode":"WG",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C",
      "SM1 deployment":{  
         "FSMF_1":"WG",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":9.5
      },
      "GSM BB capacity":{  
         "#TRXs":24
      }
   },
   {  
      "SM config ID":"SM_LG",
      "SBTS SM mode":"LG",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBC+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"LG",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"LTE"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":1,
         "#BCS":2,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":24
      }
   },
   {  
      "SM config ID":"SM_LG",
      "SBTS SM mode":"LG",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"LG",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":1,
         "#BCS":1,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":0
      },
      "GSM BB capacity":{  
         "#TRXs":24
      }
   },
   {  
      "SM config ID":"SM_LW1",
      "SBTS SM mode":"LW",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"LTE"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":2,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":5.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_LW1",
      "SBTS SM mode":"LW",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"LTE",
         "FBBx_1.2":"-"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":1,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":5.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_LW2",
      "SBTS SM mode":"LW",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"LTE"
      },
      "SM2 deployment":{  
         "FSMF_2":"-",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":1,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":11.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_LW3",
      "SBTS SM mode":"LW",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"WCDMA"
      },
      "SM2 deployment":{  
         "FSMF_2":"LTE",
         "FBBx_2.1":"LTE",
         "FBBx_2.2":"LTE"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":1,
         "#ECS":1
      },
      "WCDMA BB capacity":{  
         "#SU":17.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_LW3",
      "SBTS SM mode":"LW",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"WCDMA"
      },
      "SM2 deployment":{  
         "FSMF_2":"LTE",
         "FBBx_2.1":"LTE",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":0,
         "#ECS":1
      },
      "WCDMA BB capacity":{  
         "#SU":17.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   },
   {  
      "SM config ID":"SM_LW3",
      "SBTS SM mode":"LW",
      "No. of RATs":2,
      "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF",
      "SM1 deployment":{  
         "FSMF_1":"WCDMA",
         "FBBx_1.1":"WCDMA",
         "FBBx_1.2":"WCDMA"
      },
      "SM2 deployment":{  
         "FSMF_2":"LTE",
         "FBBx_2.1":"-",
         "FBBx_2.2":"-"
      },
      "LTE BB capacity":{  
         "#RCS":0,
         "#BCS":1,
         "#ECS":0
      },
      "WCDMA BB capacity":{  
         "#SU":17.5
      },
      "GSM BB capacity":{  
         "#TRXs":0
      }
   }
,
{  
   "SM config ID":"SM_LW3",
   "SBTS SM mode":"LW",
   "No. of RATs":2,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WCDMA",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{  
      "FSMF_2":"LTE",
      "FBBx_2.1":"LTE",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity" : {

      "#RCS":0,
      "#BCS":2,
      "#ECS":0
   },
   "WCDMA BB capacity" : {

   "#SU":17.5
   },
   "GSM BB capacity" : {

   "#TRXs":0
   }
},
{  
   "SM config ID":"SM_LW4",
   "SBTS SM mode":"LW",
   "No. of RATs":2,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WCDMA",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{  
      "FSMF_2":"LTE",
      "FBBx_2.1":"LTE",
      "FBBx_2.2":"LTE"
   },
   "LTE BB capacity" : {

      "#RCS":0,
      "#BCS":3,
      "#ECS":0
   },
   "WCDMA BB capacity" : {

   "#SU":17.5
   },
   "GSM BB capacity" : {

   "#TRXs":0
   }
},
{  
   "SM config ID":"SM_LWG1",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBC+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WG",
      "FBBx_1.1":"LTE",
      "FBBx_1.2":"LTE"
   },
   "SM2 deployment":{  
      "FSMF_2":"-",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity" : {

      "#RCS":0,
      "#BCS":2,
      "#ECS":0
   },
   "WCDMA BB capacity" : {

   "#SU":3.5
   },
   "GSM BB capacity" : {

   "#TRXs":24
   }
},
{  
   "SM config ID":"SM_LWG1",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WG",
      "FBBx_1.1":"LTE",
      "FBBx_1.2":"-"
   },
   "SM2 deployment":{  
      "FSMF_2":"-",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity" : {

      "#RCS":0,
      "#BCS":1,
      "#ECS":0
   },
   "WCDMA BB capacity" : {

   "#SU":3.5
   },
   "GSM BB capacity" : {

   "#TRXs":24
   }
},
{  
   "SM config ID":"SM_LWG2",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"LTE"
   },
   "SM2 deployment":{   
      "FSMF_2":"-",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity" : {
      "#RCS":0,
      "#BCS":1,
      "#ECS":0
   },
   "WCDMA BB capacity" : {
      "#SU":9.5
   },
   "GSM BB capacity" : {
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG3",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBC+FBBA/C",
   "SM1 deployment":{  
      "FSMF_1":"LG",
      "FBBx_1.1":"LTE",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{
      "FSMF_2":"-",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity":{
      "#RCS":1,
      "#BCS":1,
      "#ECS":0
   },
   "WCDMA BB capacity":{  
      "#SU":5.5
   },
   "GSM BB capacity":{  
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG4",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C",
   "SM1 deployment":{  
      "FSMF_1":"LG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{  
      "FSMF_2":"-",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity":{  
      "#RCS":1,
      "#BCS":0,
      "#ECS":0
   },
   "WCDMA BB capacity":{  
      "#SU":11.5
   },
   "GSM BB capacity":{  
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG4",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C",
   "SM1 deployment":{  
      "FSMF_1":"LG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"-"
   },
   "SM2 deployment":{  
      "FSMF_2":"-",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity":{  
      "#RCS":1,
      "#BCS":0,
      "#ECS":0
   },
   "WCDMA BB capacity":{  
      "#SU":5.5
   },
   "GSM BB capacity":{  
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG5",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{  
      "FSMF_2":"LTE",
      "FBBx_2.1":"LTE",
      "FBBx_2.2":"LTE"
   },
   "LTE BB capacity":{  
      "#RCS":0,
      "#BCS":3,
      "#ECS":0
   },
   "WCDMA BB capacity":{  
      "#SU":15.5
   },
   "GSM BB capacity":{  
      "#TRXs":24
   }
}
,{  
   "SM config ID":"SM_LWG6",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
   "SM1 deployment":{  
      "FSMF_1":"WG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{  
      "FSMF_2":"LTE",
      "FBBx_2.1":"LTE",
      "FBBx_2.2":"LTE"
   },
   "LTE BB capacity":{  
      "#RCS":0,
      "#BCS":1,
      "#ECS":1
   },
   "WCDMA BB capacity":{  
      "#SU":15.5
   },
   "GSM BB capacity":{  
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG6",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
   "SM1 deployment" : {
      "FSMF_1":"WG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment" : {
      "FSMF_2":"LTE",
      "FBBx_2.1":"LTE",
      "FBBx_2.2":"-"   
   },
   "LTE BB capacity" : {
      "#RCS":0,
      "#BCS":2,
      "#ECS":0
   },
   "WCDMA BB capacity" : {
      "#SU":15.5   
   },
   "GSM BB capacity" : {
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG6",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
   "SM1 deployment" : {
      "FSMF_1":"WG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"   
   },
   "SM2 deployment" : {
      "FSMF_2":"LTE",
      "FBBx_2.1":"LTE",
      "FBBx_2.2":"-"   
   },
   "LTE BB capacity" : {
      "#RCS":0,
      "#BCS":0,
      "#ECS":1
   },
   "WCDMA BB capacity" : {
      "#SU":15.5
   },
   "GSM BB capacity" : {
      "#TRXs":24
   }
}
,
{  
   "SM config ID":"SM_LWG6",
   "SBTS SM mode":"LWG",
   "No. of RATs":3,
   "SBTS SM configuration":"FSMF+FBBA/C+FBBA/C+FSMF",
   "SM1 deployment":{  
      "FSMF_1":"WG",
      "FBBx_1.1":"WCDMA",
      "FBBx_1.2":"WCDMA"
   },
   "SM2 deployment":{  
      "FSMF_2":"LTE",
      "FBBx_2.1":"-",
      "FBBx_2.2":"-"
   },
   "LTE BB capacity":{  
      "#RCS":0,
      "#BCS":1,
      "#ECS":0
   },
   "WCDMA BB capacity":{  
      "#SU":15.5
   },
   "GSM BB capacity" : {
      "#TRXs":24
   }
}
  ];

      $scope.FsmfCount=1;
      $scope.array=[1];

      $scope.isLteChecked = true;

      $scope.fsmfAddedClicked = function(){
       $scope.FsmfCount = $scope.FsmfCount + 1;
       $scope.array.push($scope.FsmfCount);
     };

      $scope.fsmfRemoveClicked = function(){
       $scope.FsmfCount = $scope.FsmfCount - 1;
       $scope.array.pop();
     };

        $scope.technologies = [
        {
            techName:"WCDMA",
            func: $scope.wcdmaCheck
        },
        {
            techName:"LTE",
            func:$scope.lteCheck
        },
        {
            techName:"GSM",
            func:$scope.gsmCheck
        }
        ];

    }]);
})();
