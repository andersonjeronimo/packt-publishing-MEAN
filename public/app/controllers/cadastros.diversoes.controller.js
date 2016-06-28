angular.module('angularApp').controller('cadastrosDiversoesCtrl', function ($scope, view, cadastroDiversaoModel) {

  $scope.model = cadastroDiversaoModel;
  $scope.view = view; 
  
  $scope.model.listaCadastros();
  $scope.model.listaDiversoes(); 
  
});