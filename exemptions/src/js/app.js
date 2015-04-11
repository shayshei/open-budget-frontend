'use strict';

var app = angular.module('BoilerplateApp', [
		// Angular Libraries.
		'ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize',
		
		// App.
		'boilerplate',
		
		// External Libs.
		'ui.bootstrap', 'ui.router', 'ui.keypress', 'ui.select'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https):/);
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
		
		$stateProvider
			.state('hello', {
				url: '/',
				templateUrl: '/media/build/partials/hello.tpl.html',
				date: {}
			})
			.state('search', {
				url: '/search',
				templateUrl: '/media/build/partials/search.tpl.html',
				data: {}
			})
			.state('search.term', {
				url: '/{term:\\w*}',
				templateUrl: '/media/build/partials/search.tpl.html',
				data: {}
			});
	});

angular.module('boilerplate.hello', []);
angular.module('boilerplate.search', []);
angular.module('boilerplate', ['boilerplate.hello', 'boilerplate.search']);