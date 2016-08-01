var AppName = angular.module('AppName', ['ngRoute']);

AppName.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});


AppName.controller('Controller', ['$scope','TestService',
  function($scope, TestService) {

  }
]);


AppName.factory('TestService', ['$http', function($http){
  var service = {
    methodName: function(){
      return $http.get('remoteUrl');
    }
  };
  return service;
}]);

