/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {

		$stateProvider
			.state('app', {
				abstract: true,
				resolve: {
					Circle: 'Circle',
					circles: function(Circle) {
						return Circle.fetch().then(function(response) {
							return response.data;
						});
					}
				}
			})
			.state('app.home', {
				url: '/',
				resolve: {
					circles: function(circles) {
						return circles;
					}
				},
				views: {
					'top-circles@': {
						templateUrl: 'scripts/circles/top-circles.html',
						controller: 'CirclesCtrl',
						controllerAs: 'vm'
					},
					'content@': {
						templateUrl: 'scripts/content/content.html',
						controller: 'ContentCtrl',
						controllerAs: 'vm'
					},
					'bottom-circles@': {
						templateUrl: 'scripts/circles/bottom-circles.html',
						controller: 'CirclesCtrl',
						controllerAs: 'vm'
					}
				}
			})
			/*.state('app.content', {
				url: '/:circleName',
				resolve: {
					circles: function(circles) {
						return circles;
					}
				},	
				views: {
					'top-circles@': {
						templateUrl: 'scripts/circles/top-circles.html',
						controller: 'CirclesCtrl',
						controllerAs: 'vm'
					},
					'content@': {
						templateUrl: 'scripts/content/content.html',
						controller: 'ContentCtrl',
						controllerAs: 'vm'
					},
					'bottom-circles@': {
						templateUrl: 'scripts/circles/bottom-circles.html',
						controller: 'CirclesCtrl',
						controllerAs: 'vm'
					}
				}
			})
			*/
			.state('app.home.content', {
				url: '/:circleName',		
				views: {
					'content@app.home': {
						templateUrl: 'scripts/content/content.html',
						controller: 'ContentCtrl',
						controllerAs: 'vm'
					}
				}
			});
	}

})();