/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.directive('spinnerOnLoad', spinnerOnLoad);

	function spinnerOnLoad() {

		var directive = {
			link: link,
			scope: {
				ngSrc: '@'
			},
			restrict: 'A'
		};

		return directive;

		function link(scope, element) {
			element.on('load', function() {
				// Set visibility: true + remove spinner overlay
				element.removeClass('spinner-hide');
				element.addClass('spinner-show');
				element.parent().find('span').remove();
			});
			scope.$watch('ngSrc', function() {
				// Set visibility: false + inject temporary spinner overlay
				element.addClass('spinner-hide');
			});
		}
	}

})();