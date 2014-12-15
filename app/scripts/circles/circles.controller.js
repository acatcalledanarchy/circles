/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CirclesCtrl', CirclesCtrl);

	CirclesCtrl.$inject = ['circles'];

	function CirclesCtrl(circles) {
		
		var vm = this;
		vm.circles = circles;
	}

})();