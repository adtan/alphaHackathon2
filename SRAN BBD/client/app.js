(function () {
    'use strict';

    var app = angular.module('SRAN-BBD-app', []);

    app.controller('SRANBBDController', ['$scope', function($scope) {
        $scope.technologies = ["WCDMA", "LTE", "GSM"];
    }]);
})();
