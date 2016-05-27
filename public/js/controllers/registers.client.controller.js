angular.module('angularApp').controller('registerController', function ($scope, registerAjaxService, modelService) {

  $scope.cadastros = [];
  $scope.model = modelService;  
  

  $scope.create = function (cadastro) {
    cadastro.dataNascimento = $scope.model.data_selecionada();
    registerAjaxService.create(cadastro, function (result) {
      delete $scope.cadastro;
      $scope.list();
    });
  };

  $scope.list = function () {
    registerAjaxService.list(function (result) {
      $scope.cadastros.length = 0;
      $scope.cadastros = result;      
    });
  };

  $scope.read = function (id) {
    registerAjaxService.read(id, function (result) {
      console.log(result);
    })
  };

  $scope.update = function (cadastro) {
    cadastro.dataNascimento = $scope.model.data_selecionada();
    registerAjaxService.update(cadastro, function (result) {
      console.log(result);   
      $scope.list();   
    });
  };

  $scope.delete = function (cadastro) {
    registerAjaxService._delete(cadastro, function (result) {
      console.log(result);
      $scope.list();
    });
  }; 
  
  $scope.list();

});