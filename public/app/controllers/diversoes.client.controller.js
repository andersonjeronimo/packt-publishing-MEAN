angular.module('angularApp').controller('diversoesController', function ($scope, view, diversaoModel) {

  $scope.view = view;
  $scope.model = diversaoModel;

  $scope.adicionaDiversao = function (cadastro) {
    diversaoModel.adicionaDiversao(cadastro);
  };

  $scope.iniciaDiversao = function (diversao) {
    diversaoModel.iniciaDiversao(diversao);
  };

  $scope.cancelaDiversao = function (diversao) {
    diversaoModel.cancelaDiversao(diversao);
  };

  $scope.adicionaTempo = function (diversao) {
    diversaoModel.adicionaTempo(diversao);
  }

  $scope.calculaValor = function (diversao) {
    diversaoModel.calculaValor(diversao);
  }
  
  $scope.finalizaBrincadeira = function (diversao) {
    diversaoModel.finalizaBrincadeira(diversao);
  }
  
  function listaDiversoes() {
    diversaoModel.listaDiversoes();
  };
    
  

});