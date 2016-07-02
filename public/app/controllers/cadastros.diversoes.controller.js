angular.module('angularApp').controller('cadastrosDiversoesCtrl', function ($scope, view, cadastroDiversaoModel, telefoneFilter) {

  $scope.model = cadastroDiversaoModel;
  $scope.view = view;

  $scope.adicionaCadastro = function (cadastro) {
    cadastroDiversaoModel.adicionaCadastro(cadastro);
    delete $scope.cadastro;
  };  

  cadastroDiversaoModel.listaCadastros();
  cadastroDiversaoModel.listaDiversoes();

});