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
	.when('/404', {templateUrl: 'partials/404.html', controller: '404Ctrl'})
	.when('/lessons/list', {templateUrl: 'partials/lessons-list.html', controller: 'LessonsListCtrl'})
	.when('/chapters/1/lessons/1', {templateUrl: 'partials/chapter-1-lesson-1.html', controller: 'Chapter1Lesson1Ctrl'})
	.otherwise({redirectTo:'/404'});
}]);