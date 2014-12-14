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
						return Circle.fetch().then(function(circles) {
							return circles;
						});
					}
				},
				views: {
					'circles': {
						templateUrl: 'scripts/circles/circles.html',
						controller: 'CirclesCtrl',
						controllerAs: 'vm'
					}
				}
			});
	}

})();