angular.module('angularApp').controller('cadastrosDiversoesCtrl', function ($scope, view, cadastroDiversaoModel) {

  $scope.model = cadastroDiversaoModel;
  $scope.view = view;

  $scope.adicionaCadastro = function (cadastro) {
    $scope.model.adicionaCadastro(cadastro);
    delete $scope.cadastro;
  };

  $scope.model.listaCadastros();
  $scope.model.listaDiversoes();

});