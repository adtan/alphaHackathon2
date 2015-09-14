(function () {
    'use strict';

    var app = angular.module('SRAN-BBD-app', []);

    app.controller('SRANBBDController', ['$scope', function($scope) {
        $scope.technologies = ["WCDMA", "LTE", "GSM"];
        $scope.outputs = [
            {
                'smconfiguration':'FSMF+FBBA+FBBA+FSMF+FBBC+FBBC',
                'sm1': {
                    'fsmf':'WG',
                    'fbbx1':'WCDMA',
                    'fbbx2':'WCDMA'
                },
                'sm2': {
                    'fsmf':'LTE',
                    'fbbx1':'LTE',
                    'fbbx2':'LTE'
                },
                'ltebbcapacity':{
                    'rcs':'',
                    'bcs':'',
                    'ecs':''
                },
                'wcdmabbcapacity':{
                    'su':15.5
                },
                'gsmbbcapacity':{
                    'trxs':24
                }
            },
            {
                'smconfiguration':'FSMF+FBBA+FBBA+FSMF+FBBC+FBBC',
                'sm1': {
                    'fsmf':'WG',
                    'fbbx1':'WCDMA',
                    'fbbx2':'WCDMA'
                },
                'sm2': {
                    'fsmf':'LTE',
                    'fbbx1':'LTE',
                    'fbbx2':'LTE'
                },
                'ltebbcapacity':{
                    'rcs':'',
                    'bcs':'',
                    'ecs':''
                },
                'wcdmabbcapacity':{
                    'su':15.5
                },
                'gsmbbcapacity':{
                    'trxs':24
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

    }]);
})();
