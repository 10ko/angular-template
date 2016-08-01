angular
  .module('app')
  .config(config);

function config($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "js/app/modules/base/home.html"
    })
    .state('mod', {
      url: "/mod",
      templateUrl: "js/app/modules/module/module.html",
      controller: 'ModuleController',
      controllerAs: 'vm'
    });
}