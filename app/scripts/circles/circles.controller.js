/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CirclesCtrl', CirclesCtrl);

	CirclesCtrl.$inject = ['circles'];

	function CirclesCtrl(circles) {
		
		var circlesCopy = angular.copy(circles),
			vm = this;
		vm.circles = circles;
		vm.circleClick = function(index) {
			if(index !== 0) {
				// Remove circles
				vm.circles[index].flipEnabled = false;
				vm.circles[index].flipped = true;
				for(var i = vm.circles.length - 1; i > index; i--) {
					//vm.remainingCircles.push(i, 1);
					vm.circles.splice(i, 1);
				}
			} else {
				// Add circles
				for(var j = vm.circles.length; j < circlesCopy.length; j ++) {
					vm.circles.push(circlesCopy[j]);
				}
				for(var k = index; k < vm.circles; k++) {
					vm.circles[k].flipped = false;
				}
			}
		};
	}

})();