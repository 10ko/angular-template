angular
  .module('moduleName')
  .controller('ModuleController', ModuleController);

function ModuleController() {
  var vm = this;

  vm.name = 'Programmer';
  vm.setName = function(name) {
    vm.name = name;
  };

};
