/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CirclesCtrl', CirclesCtrl);

	CirclesCtrl.$inject = ['circles', '$timeout'];

	function CirclesCtrl(circles, $timeout) {
		
		var i,
			circlesCopy = angular.copy(circles);

		var vm = this;
		vm.circles = circles;
		vm.pageContent = {
			title: false
		};
		vm.remainingCircles = [];
		vm.circleClick = function(index) {
			console.log('Index',index);
			if(index !== 0) {
				// Remove content
				vm.pageContent.title = null;
				// Unflip
				for(i = 0; i < vm.circles.length; i++) {
					vm.circles[i].flipped = false;
				}
				// Flip current circle and disable
				vm.circles[index].flipEnabled = false;
				vm.circles[index].flipped = true;
				// Get remaining circles
				vm.remainingCircles = [];
				for(i = index + 1; i < circlesCopy.length; i++) {
					vm.remainingCircles.push(circlesCopy[i]);
				}
				// Remove circles
				for(i = vm.circles.length - 1; i > index; i--) {
					vm.circles.splice(i, 1);
				}
				if(vm.pageContent) {
					$timeout(vm.updatePageContent(vm.circles[index]), 2000);
				}
			} else {
				// Add circles
				vm.remainingCircles = [];
				for(i = vm.circles.length; i < circlesCopy.length; i++) {
					vm.circles.push(circlesCopy[i]);
				}
				for(i = index; i < vm.circles.length; i++) {
					vm.circles[i].flipped = false;
					vm.circles[i].flipEnabled = true;
				}
			}
		};
		vm.remainingCircleClick = function(index) {
			console.log('Remaining circle click', index);
		};
		vm.updatePageContent = function(circle) {
			vm.pageContent.title = circle.pageContent.title;
			vm.pageContent.image = circle.image;
		};
	}

})();