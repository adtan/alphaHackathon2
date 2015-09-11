(function () {
    'use strict';

    angular.module('SRAN-BBD-app')
            .directive('technology', technology);

    function technology() {
        var directive = {
            restrict: 'E',
            scope:{
                name:"="
            },
            templateUrl: 'components/technology/technology.template.html'
        };
        return directive;
    }
})();