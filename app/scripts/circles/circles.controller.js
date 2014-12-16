/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CirclesCtrl', CirclesCtrl);

	CirclesCtrl.$inject = ['circles', 'Circle'];

	function CirclesCtrl(circles, Circle) {	

		var vm = this;
		vm.bottomCircles = [];
		vm.circleClick = circleClick;
		vm.topCircles = circles;

		function circleClick(circleId, circleType) {
			console.log('Circle Click');
			var data = Circle.circleClick(circleId, circleType);
			vm.topCircles = data.topCircles;
			vm.bottomCircles = data.bottomCircles;
			vm.pageContent = data.pageContent;
		}
	}

})();