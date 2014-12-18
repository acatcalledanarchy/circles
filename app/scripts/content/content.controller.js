/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContentCtrl', ContentCtrl);

	ContentCtrl.$inject = ['Circle', '$stateParams'];

	function ContentCtrl(Circle, $stateParams) {

		var vm = this;
		vm.pageContent = Circle.getPageContentByCircleName($stateParams.circleName);
	}

})();