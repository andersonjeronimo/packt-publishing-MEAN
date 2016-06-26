angular.module('angularApp').controller('diversionController', function ($scope, utilsService, diversionModelService) {

  $scope.utils = utilsService;
  $scope.model = diversionModelService;

  $scope.adicionaDiversao = function (cadastro) {
    diversionModelService.adicionaDiversao(cadastro);
  };

  $scope.iniciaDiversao = function (diversao) {
    diversionModelService.iniciaDiversao(diversao);
  };

  $scope.cancelaDiversao = function (diversao) {
    diversionModelService.cancelaDiversao(diversao);
  };

  $scope.adicionaTempo = function (diversao) {
    diversionModelService.adicionaTempo(diversao);
  }

  $scope.calculaValor = function (diversao) {
    diversionModelService.calculaValor(diversao);
  }
  
  $scope.finalizaBrincadeira = function (diversao) {
    diversionModelService.finalizaBrincadeira(diversao);
  }

//   function listaCadastros() {
//     diversionModelService.listaCadastros();
//   }
// 
//   function listaDiversoes() {
//     diversionModelService.listaDiversoes();
//   };
// 
//   $scope.cadastros = listaCadastros();
//   $scope.diversoes = listaDiversoes();

});