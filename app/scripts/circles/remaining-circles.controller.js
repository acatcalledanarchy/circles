/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('RemainingCirclesCtrl', RemainingCirclesCtrl);

	RemainingCirclesCtrl.$inject = ['circles'];

	function RemainingCirclesCtrl(circles) {

		var vm = this;
		vm.circles = circles;
	}

})();