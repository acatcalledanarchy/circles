/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Circle', Circle);

	/*
	Circle.$inject = ['$q', '$timeout', '$http'];

	function Circle($q, $timeout, $http) {
	*/
	function Circle() {

		/*
		var Service =  {
			fetch: function() {
				console.log('Fetch');
				var deferred = $q.defer();
				console.log(deferred);
				$timeout(function() {
					$http.get('/scripts/circles/circles.js').success(function(data) {
						deferred.resolve(data);
					});
				}, 30);

				return deferred.promise;
			}
		};
		*/		

		var circles = [
			{
				'id': 0,
				'name': 'oi-home-page',
				'text': 'Home page',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'logo.png'
			},
			{
				'id': 1,
				'name': 'about-us-and-our-services',
				'text': 'About us<br>&amp; our services',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'about-us-and-our-services.png',
				'pageContent': {
					'title': 'About us and our services'
				}
			},
			{
				'id': 2,
				'name': 'brand-new-thinking',
				'text': 'Brand new<br>thinking',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'brand-new-thinking.png',
				'pageContent': {
					'title': 'Brand new thinking'
				}
			},
			{
				'id': 3,
				'name': 'call-us',
				'text': 'Call us',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'green',
				'image': 'call-us.png',
				'pageContent': {
					'title': 'Call us'
				}
			},
			{
				'id': 4,
				'name': 'email-us',
				'text': 'Email us',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'green',
				'image': 'email-us.png',
				'pageContent': {
					'title': 'Email us'
				}
			},
			{
				'id': 5,
				'name': 'find-us',
				'text': 'Find us',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'green',
				'image': 'find-us.png',
				'pageContent': {
					'title': 'Find us'
				}
			},
			{
				'id': 6,
				'name': 'menu',
				'text': 'menu',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'dark-grey',
				'image': 'menu.png',
				'pageContent': {
					'title': 'Menu'
				}
			},
			{
				'id': 7,
				'name': 'three-steps-to-success',
				'text': '3 steps<br>to success',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'three-steps-to-success.png',
				'pageContent': {
					'title': 'Three steps to success'
				}
			},
			{
				'id': 8,
				'name': 'listen-and-learn',
				'text': 'Listen<br>&amp; learn',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'listen-and-learn.png',
				'pageContent': {
					'title': 'Listen and learn'
				}
			},
			{
				'id': 9,
				'name': 'collaborate-and-create',
				'text': 'Collaborate<br>&amp; create',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'collaborate-and-create.png',
				'pageContent': {
					'title': 'Collaborate and create'
				}
			},
			{
				'id': 10,
				'name': 'evaluate-and-evolve',
				'text': 'Evaluate<br>&amp; evolve',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,					
				'circleClass': 'purple',
				'image': 'evaluate-and-evolve.png',
				'pageContent': {
					'title': 'Evaluate and evolve'
				}
			},
			{
				'id': 11,
				'name': 'ipa-accredited-agency',
				'text': 'IPA accredited<br>agency',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'dark-grey',
				'image': 'ipa-accredited-agency.png',
				'pageContent': {
					'title': 'IPA accredited agency'
				}
			},
			{
				'id': 12,
				'name': 'our-team',
				'text': 'Our team',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'pink',
				'image': 'our-team.png',
				'pageContent': {
					'title': 'Our team'
				}
			},
			{
				'id': 13,
				'name': 'clients',
				'text': 'Clients',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'gold',
				'image': 'clients.png',
				'pageContent': {
					'title': 'Clients'
				}
			},
			{
				'id': 14,
				'name': 'case-study-touchstone',
				'text': '<span class=\'green-text\'>Case study</span><br>Touchstone',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple-outline',
				'image': 'case-study-touchstone.png',
				'pageContent': {
					'title': 'Case study Touchstone'
				}
			},
			{
				'id': 15,
				'name': 'case-study-moore-stephens',
				'text': '<span class=\'green-text\'>Case study</span><br>Moore Stephens',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple-outline',
				'image': 'case-study-moore-stephens.png',
				'pageContent': {
					'title': 'Case study Moore Stephens'
				}
			},
			{
				'id': 16,
				'name': 'case-study-airtel-vodafone',
				'text': '<span class=\'green-text\'>Case study</span><br>Airtel-<br>Vodafone',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,			
				'circleClass': 'purple-outline',
				'image': 'case-study-airtel-vodafone.png',
				'pageContent': {
					'title': 'Case study Airtel-Vodafone'
				}
			},
			{
				'id': 17,
				'name': 'nice-words',
				'text': 'Nice words',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'blue',
				'image': 'nice-words.png',
				'pageContent': {
					'title': 'Nice words'
				}
			},
			{
				'id': 18,
				'name': 'news',
				'text': 'News',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'news.png',
				'pageContent': {
					'title': 'News'
				}
			},
			{
				'id': 19,
				'name': 'launching-a-game-changing-app',
				'text': 'Launching a<br>game changing<br>app',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'launching-a-game-changing-app.png',
				'pageContent': {
					'title': 'Launching a game changing app'
				}
			},
			{
				'id': 20,
				'name': 'microsoft-out-apple-apple',
				'text': 'MicroSoft \'out-<br>Apple\' Apple',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'microsoft-out-apple-apple.png',
				'pageContent': {
					'title': 'MicroSoft \'out apple\' apple'
				}
			},
			{
				'id': 21,
				'name': 'sign-up-to-voice-emailer',
				'text': 'SIGN UP TO<br><span class=\'purple-text\'>vOice</span> EMAILER',
				'capitalize': false,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'pink',
				'image': 'sign-up-to-voice-emailer.png',
				'pageContent': {
					'title': 'Sign up to vOice emailer'
				}
			},
			{
				'id': 22,
				'name': 'linked-in',
				'text': 'LinkedIn',
				'circleClass': 'light-grey-outline dark-grey-text',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'image': 'linked-in.png',
				'pageContent': {
					'title': 'LinkedIn'
				}
			},
			{
				'id': 23,
				'name': 'twitter',
				'text': 'Twitter',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'twitter.png',
				'pageContent': {
					'title': 'Twitter'
				}
			},
			{
				'id': 24,
				'name': 'facebook',
				'text': 'Facebook',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'facebook.png',
				'pageContent': {
					'title': 'Facebook'
				}
			},
			{
				'id': 25,
				'name': 'google-plus',
				'text': 'Google+',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'google-plus.png',
				'pageContent': {
					'title': 'Google+'
				}
			},
			{
				'id': 26,
				'name': 'pinterest',
				'text': 'Pinterest',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'pinterest.png',
				'pageContent': {
					'title': 'Pinterest'
				}
			},
			{
				'id': 27,
				'name': 'you-tube',
				'text': 'YouTube',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'you-tube.png',
				'pageContent': {
					'title': 'YouTube'
				}
			},
			{
				'id': 28,
				'name': 'ipa',
				'text': 'IPA',
				'capitalize': true,
				'flipEnabled': true,				
				'flipped': false,
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'ipa.png',
				'pageContent': {
					'title': 'IPA'
				}
			},
			{
				'id': 29,
				'name': 'cim',
				'text': 'CIM',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'cim.png',
				'pageContent': {
					'title': 'CIM'
				}
			},
			{
				'id': 30,
				'name': 'google',
				'text': 'Google',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'google.png'
			},
			{
				'id': 31,
				'name': 'apple',
				'text': 'Apple',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'apple.png',
				'pageContent': {
					'title': 'Apple'
				}
			},
			{
				'id': 32,
				'name': 'android',
				'text': 'Android',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'android.png',
				'pageContent': {
					'title': 'Android'
				}
			},
			{
				'id': 33,
				'name': 'laravel',
				'text': 'Laravel',
				'circleClass': 'light-grey-outline light-grey-text',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,				
				'image': 'laravel.png',
				'pageContent': {
					'title': 'Laravel'
				}
			},
			{
				'id': 34,
				'name': 'html5',
				'text': 'HTML5',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'html5.png',
				'pageContent': {
					'title': 'HTML5'
				}
			}
		];

		var i,
			startSplice,
			endSplice,
			topCircles = circles,
			bottomCircles = [],
			shadowCircles = angular.copy(circles),
			pageContent = {
				title: false
			};

		var Service = {
			fetch: function() {
				return circles;
			},
			circleClick: function(circleId, circleType) {
				if(circleId === 0) {
					Service.resetCircles(circleId);
				} else {
					if(circleType === 'top') {
						Service.moveCirclesBetweenTopAndBottom(circleId, circleType);
						Service.removeCircles(circleId, circleType);				
					} else {
						Service.moveCirclesBetweenTopAndBottom(circleId, circleType);
						Service.removeCircles(circleId, circleType);
					}
					Service.flipCircle(circleId);
					Service.updatePageContent(topCircles[circleId]);
				}

				return {
					topCircles: topCircles,
					bottomCircles: bottomCircles,
					pageContent: pageContent
				};
			},
			flipCircle: function(circleId) {
				for(i = 0; i < topCircles.length; i++) {
					topCircles[i].flipEnabled = true;
					topCircles[i].flipped = false;
				}
				for(i = 0; i < bottomCircles.length; i++) {
					bottomCircles[i].flipEnabled = true;
					bottomCircles[i].flipped = false;
				}
				topCircles[circleId].flipEnabled = false;
				topCircles[circleId].flipped = true;
			},
			moveCirclesBetweenTopAndBottom: function(circleId, circleType) {
				if(circleType === 'top') {
					bottomCircles = [];
					for(i = circleId + 1; i < shadowCircles.length; i++) {
						bottomCircles.push(shadowCircles[i]);
					}
				} else {
					for(i = topCircles.length; i <= circleId; i++) {
						topCircles.push(shadowCircles[i]);
					}
				}
			},
			removeCircles: function(circleId, circleType) {
				if(circleType === 'top') {
					startSplice = circleId + 1;
					endSplice = topCircles.length - (circleId + 1);
					topCircles.splice(startSplice, endSplice);
				} else {
					startSplice = 0;
					endSplice = (circleId - bottomCircles[0].id) + 1;
					bottomCircles.splice(startSplice, endSplice);
				}
			},
			resetCircles: function(circleId) {
				bottomCircles = [];
				for(i = topCircles.length; i < shadowCircles.length; i++) {
					topCircles.push(shadowCircles[i]);
				}
				for(i = circleId; i < topCircles.length; i++) {
					topCircles[i].flipped = false;
					topCircles[i].flipEnabled = true;
				}
			},
			updatePageContent: function(circle) {
				pageContent.title = null;
				if(pageContent) {
					pageContent.title = circle.pageContent.title;
					pageContent.image = circle.image;
				}
			}
		};

		return Service;
	}

})();