/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config)
		.run(runBlock);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('layout', {
				url: '/',
				resolve: {
					Circle: 'Circle',
					circles: function(Circle) {
						return Circle.fetch().then(function(response) {
							return response.data;
						});
					}
				},
				templateUrl: 'scripts/layout/layout.html',
				controller: 'LayoutCtrl',
				controllerAs: 'vm'		
			})
			.state('layout.content', {
				url: ':circleName',
				templateUrl: 'scripts/content/content.html',
				controller: 'ContentCtrl',
				controllerAs: 'vm'
			});
	}

	runBlock.$inject = ['$rootScope', '$timeout', '$window'];

	function runBlock($rootScope, $timeout, $window) {

		$rootScope.$on('$routeChangeSuccess', function () {
			$timeout(function () {
				$window.scrollTo(0,0);
			}, 500);
		});
	}

})();