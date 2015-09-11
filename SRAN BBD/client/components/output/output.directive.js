(function () {
    'use strict';

    angular.module('SRAN-BBD-app')
            .directive('output', output);

    function output() {
        var directive = {
            restrict: 'E',
            scope:{
                name:"="
            },
            templateUrl: 'components/output/output.template.html'
        };
        return directive;
    }
})();