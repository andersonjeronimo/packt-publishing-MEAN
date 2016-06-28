angular.module('angularApp').controller('cadastrosController', function ($scope, view, cadastroModel) {

  $scope.model = cadastroModel;
  $scope.view = view; 
  
  $scope.model.listaCadastros(); 
  
});