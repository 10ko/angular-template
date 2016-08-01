angular
  .module('app')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
          templateUrl: 'js/app/modules/base/home.html'
      })
      .when('/mod', {
          templateUrl: 'js/app/modules/module/module.html',
          controller: 'ModuleController',
          controllerAs: 'vm'
      });
}