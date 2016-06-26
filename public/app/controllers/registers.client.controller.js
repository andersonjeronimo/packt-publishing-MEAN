angular.module('angularApp').controller('registerController', function ($scope, utilsService, diversionModelService) {

  $scope.model = utilsService;  

  $scope.adicionaDiversao = function (cadastro) {
    diversionModelService.adicionaDiversao(cadastro);
  }; 

  $scope.iniciaDiversao = function (diversao) {
   diversionModelService.iniciaDiversao(diversao);
  };

  $scope.cancelaDiversao = function (diversao) {
    diversionModelService.cancelaDiversao(diversao);
  };
  
   function listaCadastros() {
    diversionModelService.listaCadastros();
  }
    
  function listaDiversoes() {
    diversionModelService.listaDiversoes();
  };
  
  $scope.cadastros = listaCadastros();
  $scope.diversoes = listaDiversoes();

});