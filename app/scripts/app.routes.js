/* jshint latedef: false */
/* global $ */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$provide'];

	function config($stateProvider, $urlRouterProvider, $provide) {

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

		$provide.decorator('$uiViewScroll', function() {
			return function(uiViewElement) {
				$('html,body').animate({
					scrollTop: uiViewElement.offset().top
				}, 500);
			};
		});
	}

})();