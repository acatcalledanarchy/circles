/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('/', {
				url: '/',
				resolve: {
					Circle: 'Circle',
					circles: function(Circle) {
						return Circle.fetch().then(function(response) {
							return response.data;
						});
					}
				},
				views: {
					'circles': {
						templateUrl: 'scripts/circles/circles.html',
						controller: 'CirclesCtrl',
						controllerAs: 'vm'
					},
					'content': {
						templateUrl: 'scripts/content/content.html',
						controller: 'ContentCtrl',
						controllerAs: 'vm'
					},
					'remaining-circles': {
						templateUrl: 'scripts/circles/remaining-circles.html',
						controller: 'RemainingCirclesCtrl',
						controllerAs: 'vm'
					}
				}
			});
	}

})();