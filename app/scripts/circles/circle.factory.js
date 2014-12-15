/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Circle', Circle);

	Circle.$inject = ['$q', '$timeout', '$http'];

	function Circle($q, $timeout, $http) {

		var Service =  {
			fetch: function() {
				console.log('Fetch');
				var deferred = $q.defer();
				console.log(deferred);
				$timeout(function() {
					$http.get('api/circles.json').success(function(data) {
						deferred.resolve(data);
					});
				}, 30);

				return deferred.promise;
			}
		};

		return Service;
	}

})();