angular.module('angularApp').controller('cadastrosDiversoesCtrl', function ($scope, view, cadastroDiversaoModel, telefoneFilter, precoModel) {

  $scope.model = cadastroDiversaoModel;
  $scope.view = view;
  $scope.preco = {};  
  
  precoModel.listaPrecos().then(function (data) {
    if (data.length > 0) {
      $scope.preco = data[0];
    } else {
      precoModel.inserePrecos().then(function (data) {
        $scope.preco = data;
      });
    }
  });

  $scope.adicionaCadastro = function (cadastro) {
    cadastroDiversaoModel.adicionaCadastro(cadastro);
    delete $scope.cadastro;
  };

  $scope.iniciaDiversao = function (diversao) {
    diversao.tempo = angular.copy(view.tempo);
    cadastroDiversaoModel.iniciaDiversao(diversao);
  };

  cadastroDiversaoModel.listaCadastros();
  cadastroDiversaoModel.listaDiversoes();

});