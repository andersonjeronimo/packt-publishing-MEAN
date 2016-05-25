angular.module('angularApp').controller('registerController', function ($scope, registerAjaxService, modelService) {

  $scope.cadastros = [];
  $scope.model = modelService;  
  

  $scope.create = function (cadastro) {
    cadastro.dataNascimento = createDateObject();
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
    cadastro.dataNascimento = createDateObject();
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
  
  function createDateObject() {
    var dia = Number(angular.copy($scope.model.calendario.dia));
    var mes = Number(angular.copy($scope.model.calendario.mes));
    var ano = Number(angular.copy($scope.model.calendario.ano));
    var dataNascimento = new Date();
    dataNascimento.setDate(dia);
    dataNascimento.setMonth(mes - 1);
    dataNascimento.setFullYear(ano);
    return dataNascimento;
  };
  
  $scope.list();

});