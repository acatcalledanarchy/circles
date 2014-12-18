/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Circle', Circle);

	Circle.$inject = ['$q', '$http'];

	function Circle($q, $http) {		

		var i,
			startSplice,
			endSplice;

		var service = {
			bottomCircles: [],
			fetch: fetch,
			circleClick: circleClick,
			flipCircle: flipCircle,
			getPageContentByCircleName: getPageContentByCircleName,
			moveCircles: moveCircles,
			pageContent: {},
			removeCircles: removeCircles,
			resetCircles: resetCircles,
			shadowCircles: [],
			topCircles: [],
			updatePageContent: updatePageContent
		};

		return service;

		//////////////////////////////////////////////////////////////////////

		function fetch() {
			var defer = $q.defer();
			$http
				.get('json/circles.json')
				.then(function(response) {
					defer.resolve(response);
					service.topCircles = response.data;
					service.shadowCircles = angular.copy(response.data);
				});
			return defer.promise;
		}

		function circleClick(circleId, circleType) {
			if(circleId === 0) {
				service.resetCircles(circleId);
			} else {
				service.moveCircles(circleId, circleType);
				service.removeCircles(circleId, circleType);				
				service.flipCircle(circleId);
				service.updatePageContent(service.topCircles[circleId]);
			}
			var data = {
				topCircles: service.topCircles,
				bottomCircles: service.bottomCircles,
				pageContent: service.pageContent
			};
			return data;
		}

		function flipCircle(circleId) {
			for(i = 0; i < service.topCircles.length; i++) {
				service.topCircles[i].flipEnabled = true;
				service.topCircles[i].flipped = false;
			}
			for(i = 0; i < service.bottomCircles.length; i++) {
				service.bottomCircles[i].flipEnabled = true;
				service.bottomCircles[i].flipped = false;
			}
			service.topCircles[circleId].flipEnabled = false;
			service.topCircles[circleId].flipped = true;
		}

		function getPageContentByCircleName(circleName) {
			for(i = 0; i < service.shadowCircles.length; i++) {
				if(circleName === service.shadowCircles[i].name) {
					var data = {
						title: service.shadowCircles[i].pageContent.title,
						image: service.shadowCircles[i].image
					};
					return data;
				}
			}
			return null;
		}

		function moveCircles(circleId, circleType) {
			if(circleType === 'top') {
				service.bottomCircles = [];
				for(i = circleId + 1; i < service.shadowCircles.length; i++) {
					service.bottomCircles.push(service.shadowCircles[i]);
				}
			} else {
				for(i = service.topCircles.length; i <= circleId; i++) {
					service.topCircles.push(service.shadowCircles[i]);
				}
			}
		}

		function removeCircles(circleId, circleType) {
			if(circleType === 'top') {
				startSplice = circleId + 1;
				endSplice = service.topCircles.length - (circleId + 1);
				service.topCircles.splice(startSplice, endSplice);
			} else {
				startSplice = 0;
				endSplice = (circleId - service.bottomCircles[0].id) + 1;
				service.bottomCircles.splice(startSplice, endSplice);
			}
		}

		function resetCircles(circleId) {
			service.bottomCircles = [];
			for(i = service.topCircles.length; i < service.shadowCircles.length; i++) {
				service.topCircles.push(service.shadowCircles[i]);
			}
			for(i = circleId; i < service.topCircles.length; i++) {
				service.topCircles[i].flipped = false;
				service.topCircles[i].flipEnabled = true;
			}
		}

		function updatePageContent(circle) {
			service.pageContent.title = null;
			if(service.pageContent) {
				service.pageContent.title = circle.pageContent.title;
				service.pageContent.image = circle.image;
			}
		}
	}

})();