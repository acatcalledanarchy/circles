/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.directive('ngSlideDown', ngSlideDown);

	ngSlideDown.$inject = ['$timeout'];

	function ngSlideDown($timeout) {

		var directive = {
			link: link,
			restrict: 'A',
			scope: {
				expanded: '=ngSlideDown'
			},
			template: function(tElement, tAttrs) {
				return getTemplate(tElement, tAttrs);
			},
			transclude: true
		};

		return directive;

		//////////////////////////////////////////////////////////////

		function getTemplate(tElement, tAttrs) {
			if (tAttrs.lazyRender !== void 0) {
				return '<div ng-if=\'lazyRender\' ng-transclude></div>';
			} else {
				return '<div ng-transclude></div>';
			}
		}
		function link(scope, element, attrs) {

			var closePromise = null,
				duration = attrs.duration || 1,
				elementScope = element.scope(),
				emitOnClose = attrs.emitOnClose,
				lazyRender = attrs.lazyRender !== void 0,
				onClose = attrs.onClose;

			if (lazyRender) {
				scope.lazyRender = scope.expanded;
			}

			element.css({
				overflow: 'hidden',
				transitionProperty: 'height',
				transitionDuration: '' + duration + 's',
				transitionTimingFunction: 'ease-in-out'
			});
			function getHeight() {
				var c, children, height, _i, _len;
				height = 0;
				children = element.children();
				for (_i = 0, _len = children.length; _i < _len; _i++) {
					c = children[_i];
					height += c.clientHeight;
				}
				return '' + height + 'px';
			}
			function hide() {
				element.css('height', '0px');
				if (emitOnClose || onClose || lazyRender) {
					var closePromise = $timeout(function () {
						if (emitOnClose) {
							scope.$emit(emitOnClose, {});
						}
						if (onClose) {
							elementScope.$eval(onClose);
						}
						if (lazyRender) {
							var result = scope.lazyRender = false;
							return result;
						}
					}, duration * 1000);
					return closePromise;
				}
			}
			function show() {
				if (closePromise) {
					$timeout.cancel(closePromise);
				}
				if (lazyRender) {
					scope.lazyRender = true;
				}
				return element.css('height', getHeight());
			}
			scope.$watch('expanded', function (value) {
				if (value) {
					return $timeout(show);
				} else {
					return $timeout(hide);
				}
			});
			return scope.$watch(getHeight, function (value, oldValue) {
				if (scope.expanded && value !== oldValue) {
					return $timeout(show);
				}
			});
		}
	}

})();