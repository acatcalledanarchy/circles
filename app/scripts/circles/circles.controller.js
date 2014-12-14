/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['Circle'];

	function MainCtrl(Circle) {
		
		var vm = this;
		vm.circles = Circle.all;

		console.log(vm.circles);
	}

})();