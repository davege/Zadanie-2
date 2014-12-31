AppOne = angular.module('AppOne', ['ui.router']); 
	AppOne.controller('NameController', ['$scope', function($scope){
	$scope.name = 'Dawid'; 
	}]);

//zadanie2
AppOne.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/name");

  $stateProvider
    .state('name', {
      url: "/name",
      templateUrl: "src/ptrng.tmplt.html",
      controller: function($scope) {
        $scope.name = 'Dawid';
      }
    })
    //dodatkowe
	.state('Cat', {
      url: "/Cat",
      templateUrl: "src/Cat.html"
	  })
});

AppOne.directive('ptrngName',function()
{
return{
restrict: 'E',
template: 'Your name is {{name}}'
};
});
