var ClientApp = ClientApp || {};


ClientApp.Constants = angular.module('clientApp.constants', []);
ClientApp.Services = angular.module('clientApp.services', []);
ClientApp.Controllers = angular.module('clientApp.controllers', []);
ClientApp.Filters = angular.module('clientApp.filters', []);
ClientApp.Directives = angular.module('clientApp.directives', []);

angular.module('clientApp',
	['clientApp.constants', 'clientApp.services', 'clientApp.controllers', 'clientApp.filters', 'clientApp.directives', 'ngRoute'])
	.config(['$routeProvider', function($routeProvider){

		$routeProvider
			.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
			.when('/lessons/list', {templateUrl: 'partials/lessons-list.html', controller: 'LessonsListCtrl'});
	}]);