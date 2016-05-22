angular.module('angularApp').controller('registerController', function ($scope, registerAjaxService, modelService) {

  $scope.cadastros = [];
  $scope.model = modelService;  

  $scope.create = function (cadastro) {
    cadastro.dataNascimento = createDateObject();
    registerAjaxService.create(cadastro, function (result) {
      window.alert(result);
    });
  };

  $scope.list = function () {
    registerAjaxService.list(function (result) {
      $scope.cadastros.length = 0;
      $scope.cadastros.push(result);
    });
  };

  $scope.read = function (id) {
    registerAjaxService.read(id, function (result) {
      window.alert(result);
    })
  };

  $scope.update = function (cadastro) {
    registerAjaxService.update(cadastro, function (result) {
      window.alert(result);
    });
  };

  $scope.delete = function (id) {
    registerAjaxService._delete(id, function (result) {
      window.alert(result);
    });
  };
  
  function createDateObject() {
    var dia = Number(angular.copy($scope.model.calendario.dia));
    var mes = Number(angular.copy($scope.model.calendario.mes));
    var ano = Number(angular.copy($scope.model.calendario.ano));
    var data_nascimento = new Date();
    data_nascimento.setDate(dia);
    data_nascimento.setMonth(mes - 1);
    data_nascimento.setFullYear(ano);
    return data_nascimento;
  };

});