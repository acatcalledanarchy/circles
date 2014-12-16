/* jshint latedef: false */

/*(function() {

	'use strict';

	angular
		.module('app')
		.directive('scrollToElement', scrollToElement);

	function scrollToElement(){

		var directive = {
			link: link,
			restrict: 'A'
		};

		return directive;

		function link(scope, $elm, attrs) {
			var idToScroll = attrs.href;
			console.log('Id to scroll', idToScroll);
			$elm.on('click', function() {
				var $target;
				if (idToScroll) {
					$target = $(idToScroll);
				} else {
					$target = $elm;
				}
				$('body').animate({scrollTop: $target.offset().top}, 'slow');
			});
		}
	}

})();*/