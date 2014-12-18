/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('LayoutCtrl', LayoutCtrl);

	LayoutCtrl.$inject = ['circles', 'Circle'];

	function LayoutCtrl(circles, Circle) {	

		console.log('LayoutCtrl LOADED!');

		var vm = this;
		vm.bottomCircles = [];
		vm.circleClick = circleClick;
		vm.topCircles = circles;

		/////////////////////////////////////////////////////

		function circleClick(circleId, circleType) {
			var data = Circle.circleClick(circleId, circleType);
			vm.topCircles = data.topCircles;
			vm.bottomCircles = data.bottomCircles;
		}
	}

})();