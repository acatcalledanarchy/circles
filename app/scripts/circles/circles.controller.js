/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CirclesCtrl', CirclesCtrl);

	CirclesCtrl.$inject = ['$scope', 'circles', 'Circle'];

	function CirclesCtrl($scope, circles, Circle) {	

		var vm = this;
		vm.bottomCircles = [];
		vm.circleClick = circleClick;
		vm.topCircles = circles;

		/////////////////////////////////////////////////////

		function circleClick(circleId, circleType) {
			Circle.circleClick(circleId, circleType);
		}

		$scope.$on('circles:updated', function(event, data) {
			vm.topCircles = data.topCircles;
			vm.bottomCircles = data.bottomCircles;
		});
	}

})();