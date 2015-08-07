angular.module('kafa', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/:nav', {
    templateUrl: 'router.html',
	controller: 'RouteController'
  })
  .otherwise({
	redirectTo: '/info'
  });
  $locationProvider.html5Mode(true);
})
.controller('RouteController', function ($scope, $routeParams) {
	$scope.templateUrl = 'pages/' + $routeParams.nav + '.html';
});