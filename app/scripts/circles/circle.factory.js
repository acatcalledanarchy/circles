/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Circle', Circle);

	function Circle() {

		var circles = [
			{
				name: 'oi-home-page',
				text: 'Oi',
				circle: 'purple',
				image: 'logo.png'
			},
			{
				name: 'about-us-and-our-services',
				text: 'About us<br>&amp; our services',
				circle: 'purple',
				image: 'about-us-and-our-services.png'
			},
			{
				name: 'brand-new-thinking',
				text: 'Brand new<br>thinking',
				circle: 'purple',
				image: 'brand-new-thinking.png'
			},
			{
				name: 'call-us',
				text: 'Call us',
				circle: 'green',
				image: 'call-us.png'
			},
			{
				name: 'email-us',
				text: 'Email us',
				circle: 'green',
				image: 'email-us.png'
			},
			{
				name: 'find-us',
				text: 'Find us',
				circle: 'green',
				image: 'find-us.png'
			},
			{
				name: 'menu',
				text: 'menu',
				circle: 'dark-grey',
				image: 'menu.png'
			},
			{
				name: 'three-steps-to-success',
				text: '3 steps<br>to success',
				circle: 'purple',
				image: 'three-steps-to-success.png'
			},
			{
				name: 'listen-and-learn',
				text: 'Listen<br>&amp; learn',
				circle: 'purple',
				image: 'listen-and-learn.png'
			},
			{
				name: 'collaborate-and-create',
				text: 'Collaborate<br>&amp; create',
				circle: 'purple',
				image: 'collaborate-and-create.png'
			},
			{
				name: 'evaluate-and-evolve',
				text: 'Evaluate<br>&amp; evolve',
				circle: 'purple',
				image: 'evaluate-and-evolve.png'
			},
			{
				name: 'ipa-accredited-agency',
				text: 'IPA accredited<br>agency',
				circle: 'dark-grey',
				image: 'ipa-accredited-agency.png'
			},
			{
				name: 'our-team',
				text: 'Our team',
				circle: 'pink',
				image: 'our-team.png'
			},
			{
				name: 'clients',
				text: 'Clients',
				circle: 'gold',
				image: 'clients.png'
			},
			{
				name: 'case-study-touchstone',
				text: '<span class="green-text">Case study</span><br>Touchstone',
				circle: 'purple-outline',
				image: 'case-study-touchstone.png'
			},
			{
				name: 'case-study-moore-stephens',
				text: '<span class="green-text">Case study</span><br>Moore Stephens',
				circle: 'purple-outline',
				image: 'case-study-moore-stephens.png'
			},
			{
				name: 'case-study-airtel-vodafone',
				text: '<span class="green-text">Case study</span><br>Airtel-<br>Vodafone',
				circle: 'purple-outline',
				image: 'case-study-airtel-vodafone.png'
			},
			{
				name: 'nice-words',
				text: 'Nice words',
				circle: 'blue',
				image: 'nice-words.png'
			},
			{
				name: 'news',
				text: 'News',
				circle: 'light-grey-outline',
				image: 'news.png'
			},
			{
				name: 'launching-a-game-changing-app',
				text: 'Launching a<br>game changing<br>app',
				circle: 'light-grey-outline',
				image: 'launching-a-game-changing-app.png'
			},
			{
				name: 'microsoft-out-apple-apple',
				text: 'MicroSoft \'out-<br>Apple\' Apple',
				circle: 'light-grey-outline',
				image: 'microsoft-out-apple-apple.png'
			},
			{
				name: 'sign-up-to-voice-emailer',
				text: 'Sign up to<br><span class="purple-text">vOice</span> emailer',
				circle: 'pink',
				image: 'sign-up-to-voice-emailer.png'
			},
			{
				name: 'linked-in',
				text: 'LinkedIn',
				circle: 'light-grey-outline',
				image: 'linked-in.png'
			},
			{
				name: 'twitter',
				text: 'Twitter',
				circle: 'light-grey-outline',
				image: 'twitter.png'
			},
			{
				name: 'facebook',
				text: 'Facebook',
				circle: 'light-grey-outline',
				image: 'facebook.png'
			},
			{
				name: 'google-plus',
				text: 'Google+',
				circle: 'light-grey-outline',
				image: 'google-plus.png'
			},
			{
				name: 'pinterest',
				text: 'Pinterest',
				circle: 'light-grey-outline',
				image: 'pinterest.png'
			},
			{
				name: 'you-tube',
				text: 'YouTube',
				circle: 'light-grey-outline',
				image: 'you-tube.png'
			}
		];

		var Service =  {
			all: circles
		};

		return Service;
	}

})();