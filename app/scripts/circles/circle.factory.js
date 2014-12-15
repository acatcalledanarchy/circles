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
				'name': 'oi-home-page',
				'text': 'Home page',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'logo.png'
			},
			{
				'name': 'about-us-and-our-services',
				'text': 'About us<br>&amp; our services',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'about-us-and-our-services.png'
			},
			{
				'name': 'brand-new-thinking',
				'text': 'Brand new<br>thinking',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'brand-new-thinking.png'
			},
			{
				'name': 'call-us',
				'text': 'Call us',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'green',
				'image': 'call-us.png'
			},
			{
				'name': 'email-us',
				'text': 'Email us',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'green',
				'image': 'email-us.png'
			},
			{
				'name': 'find-us',
				'text': 'Find us',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'green',
				'image': 'find-us.png'
			},
			{
				'name': 'menu',
				'text': 'menu',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'dark-grey',
				'image': 'menu.png'
			},
			{
				'name': 'three-steps-to-success',
				'text': '3 steps<br>to success',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'three-steps-to-success.png'
			},
			{
				'name': 'listen-and-learn',
				'text': 'Listen<br>&amp; learn',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'listen-and-learn.png'
			},
			{
				'name': 'collaborate-and-create',
				'text': 'Collaborate<br>&amp; create',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple',
				'image': 'collaborate-and-create.png'
			},
			{
				'name': 'evaluate-and-evolve',
				'text': 'Evaluate<br>&amp; evolve',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,					
				'circleClass': 'purple',
				'image': 'evaluate-and-evolve.png'
			},
			{
				'name': 'ipa-accredited-agency',
				'text': 'IPA accredited<br>agency',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'dark-grey',
				'image': 'ipa-accredited-agency.png'
			},
			{
				'name': 'our-team',
				'text': 'Our team',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'pink',
				'image': 'our-team.png'
			},
			{
				'name': 'clients',
				'text': 'Clients',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'gold',
				'image': 'clients.png'
			},
			{
				'name': 'case-study-touchstone',
				'text': '<span class=\'green-text\'>Case study</span><br>Touchstone',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple-outline',
				'image': 'case-study-touchstone.png'
			},
			{
				'name': 'case-study-moore-stephens',
				'text': '<span class=\'green-text\'>Case study</span><br>Moore Stephens',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'purple-outline',
				'image': 'case-study-moore-stephens.png'
			},
			{
				'name': 'case-study-airtel-vodafone',
				'text': '<span class=\'green-text\'>Case study</span><br>Airtel-<br>Vodafone',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,			
				'circleClass': 'purple-outline',
				'image': 'case-study-airtel-vodafone.png'
			},
			{
				'name': 'nice-words',
				'text': 'Nice words',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'blue',
				'image': 'nice-words.png'
			},
			{
				'name': 'news',
				'text': 'News',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'news.png'
			},
			{
				'name': 'launching-a-game-changing-app',
				'text': 'Launching a<br>game changing<br>app',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'launching-a-game-changing-app.png'
			},
			{
				'name': 'microsoft-out-apple-apple',
				'text': 'MicroSoft \'out-<br>Apple\' Apple',
				'capitalize': true,
				'flipEnabled': true,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'microsoft-out-apple-apple.png'
			},
			{
				'name': 'sign-up-to-voice-emailer',
				'text': 'SIGN UP TO<br><span class=\'purple-text\'>vOice</span> EMAILER',
				'capitalize': false,
				'flipEnabled': true,
				'flipped': false,				
				'circleClass': 'pink',
				'image': 'sign-up-to-voice-emailer.png'
			},
			{
				'name': 'linked-in',
				'text': 'LinkedIn',
				'circleClass': 'light-grey-outline dark-grey-text',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'image': 'linked-in.png'
			},
			{
				'name': 'twitter',
				'text': 'Twitter',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'twitter.png'
			},
			{
				'name': 'facebook',
				'text': 'Facebook',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'facebook.png'
			},
			{
				'name': 'google-plus',
				'text': 'Google+',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'google-plus.png'
			},
			{
				'name': 'pinterest',
				'text': 'Pinterest',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'pinterest.png'
			},
			{
				'name': 'you-tube',
				'text': 'YouTube',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline dark-grey-text',
				'image': 'you-tube.png'
			},
			{
				'name': 'ipa',
				'text': 'IPA',
				'capitalize': true,
				'flipEnabled': false,				
				'flipped': false,
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'ipa.png'
			},
			{
				'name': 'cim',
				'text': 'CIM',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'cim.png'
			},
			{
				'name': 'google',
				'text': 'Google',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'google.png'
			},
			{
				'name': 'apple',
				'text': 'Apple',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'apple.png'
			},
			{
				'name': 'android',
				'text': 'Android',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'android.png'
			},
			{
				'name': 'laravel',
				'text': 'Laravel',
				'circleClass': 'light-grey-outline light-grey-text',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,				
				'image': 'laravel.png'
			},
			{
				'name': 'html5',
				'text': 'HTML5',
				'capitalize': true,
				'flipEnabled': false,
				'flipped': false,
				'circleClass': 'light-grey-outline light-grey-text',
				'image': 'html5.png'
			}
		];

		var Service = {
			fetch: function() {
				return circles;
			}
		};

		return Service;
	}

})();