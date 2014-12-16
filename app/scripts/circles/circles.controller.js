/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CirclesCtrl', CirclesCtrl);

	CirclesCtrl.$inject = ['circles'];

	function CirclesCtrl(circles) {	

		var i,
			startSplice,
			endSplice,
			shadowCircles = angular.copy(circles);
		var vm = this;
		vm.topCircles = circles;
		vm.bottomCircles = [];
		vm.pageContent = {
			title: false
		};
		vm.circleClick = function(circleId, circleType) {
			if(circleId === 0) {
				vm.resetCircles(circleId);
			} else {
				if(circleType === 'top') {
					vm.moveCirclesBetweenTopAndBottom(circleId, circleType);
					vm.removeCircles(circleId, circleType);				
				} else {
					vm.moveCirclesBetweenTopAndBottom(circleId, circleType);
					vm.removeCircles(circleId, circleType);
				}
				vm.flipCircle(circleId);
				vm.updatePageContent(vm.topCircles[circleId]);
			}
		};
		vm.flipCircle = function(circleId) {
			console.log('Reset circle flip');
			for(i = 0; i < vm.topCircles.length; i++) {
				vm.topCircles[i].flipEnabled = true;
				vm.topCircles[i].flipped = false;
			}
			for(i = 0; i < vm.bottomCircles.length; i++) {
				vm.bottomCircles[i].flipEnabled = true;
				vm.bottomCircles[i].flipped = false;
			}
			vm.topCircles[circleId].flipEnabled = false;
			vm.topCircles[circleId].flipped = true;
		};		
		vm.moveCirclesBetweenTopAndBottom = function(circleId, circleType) {
			if(circleType === 'top') {
				vm.bottomCircles = [];
				for(i = circleId + 1; i < shadowCircles.length; i++) {
					vm.bottomCircles.push(shadowCircles[i]);
				}
			} else {
				for(i = vm.topCircles.length; i <= circleId; i++) {
					vm.topCircles.push(shadowCircles[i]);
				}
			}
		};
		vm.removeCircles = function(circleId, circleType) {
			if(circleType === 'top') {
				startSplice = circleId + 1;
				endSplice = vm.topCircles.length - (circleId + 1);
				vm.topCircles.splice(startSplice, endSplice);
			} else {
				startSplice = 0;
				endSplice = (circleId - vm.bottomCircles[0].id) + 1;
				vm.bottomCircles.splice(startSplice, endSplice);
			}

		};
		vm.resetCircles = function(circleId) {
			vm.bottomCircles = [];
			for(i = vm.topCircles.length; i < shadowCircles.length; i++) {
				vm.topCircles.push(shadowCircles[i]);
			}
			for(i = circleId; i < vm.topCircles.length; i++) {
				vm.topCircles[i].flipped = false;
				vm.topCircles[i].flipEnabled = true;
			}
		};
		vm.updatePageContent = function(circle) {
			vm.pageContent.title = null;
			if(vm.pageContent) {
				vm.pageContent.title = circle.pageContent.title;
				vm.pageContent.image = circle.image;
			}
		};
	}

})();