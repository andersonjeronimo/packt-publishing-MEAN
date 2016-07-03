angular.module('angularApp').controller('cadastrosDiversoesCtrl', function ($scope, view, cadastroDiversaoModel, telefoneFilter) {

  $scope.model = cadastroDiversaoModel;
  $scope.view = view;

  $scope.adicionaCadastro = function (cadastro) {
    cadastroDiversaoModel.adicionaCadastro(cadastro);
    delete $scope.cadastro;
  };  

  $scope.iniciaDiversao = function (diversao) {
    diversao.inicio = new Date().setHours(view.tempo.inicio.hora, view.tempo.inicio.minuto);
    diversao.fim = new Date().setHours(view.tempo.fim.hora, view.tempo.fim.minuto);
    cadastroDiversaoModel.iniciaDiversao(diversao);
  };

  cadastroDiversaoModel.listaCadastros();
  cadastroDiversaoModel.listaDiversoes();

});