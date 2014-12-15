/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContentCtrl', ContentCtrl);

	function ContentCtrl() {

		var vm = this;
		vm.pageTitle = '';
	}

})();