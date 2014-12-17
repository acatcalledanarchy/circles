/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContentCtrl', ContentCtrl);

	ContentCtrl.$inject = ['$scope', 'Circle', '$stateParams'];

	function ContentCtrl($scope, Circle, $stateParams) {

		console.log('ContentCtrl');

		var circleName = $stateParams.circleName;

		if(circleName) {
			var circle = Circle.getByName(circleName);
			console.log('Circle', circle);

			/*
			Circle.getByName(circleName).then(function(response) {
				var circle = response.data;
				console.log(circle);
			});
			*/
		}

		var vm = this;
		vm.pageTitle = null;

		$scope.$on('circles:updated', function(event, data) {
			console.log('Update!');
			vm.pageContent = data.pageContent;
		});
	}

})();