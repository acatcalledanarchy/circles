/* jshint latedef: false */

(function() {

    'use strict';

    angular
        .module('app')
        .directive('spinnerOnLoad', spinnerOnLoad);

    function spinnerOnLoad() {

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;
        
        function link(scope,element,attrs) {
            element.on('load', function() {
                element.removeClass('spinner-hide');
                element.addClass('spinner-show');
                element.parent().find('span').remove();
            });
            scope.$watch('ngSrc', function() {
                var circleClass = attrs.spinnerOnLoad;
                element.addClass('spinner-hide');
                element.parent().append('<span class="spinner circle ' + circleClass + '"><span></span></span>');
            });      
        }
    }

})();