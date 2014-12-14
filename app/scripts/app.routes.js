/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'scripts/circles/circles.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
	  	.otherwise({
		  	redirectTo: '/'
	  	});
	}

})();