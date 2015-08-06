angular.module('kafa', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
//  .when('/info', {
//    templateUrl: 'pages/info.html'
//  })
  .when('/:nav', {
    templateUrl: 'router.html',
	controller: 'RouteController'
  })
  .otherwise({
	redirectTo: '/info'
  })
})
.controller('RouteController', function ($scope, $routeParams) {
	$scope.templateUrl = 'pages/' + $routeParams.nav + '.html';
});