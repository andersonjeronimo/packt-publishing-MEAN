angular.module('angularApp').controller('registerController', function ($scope, registerAjaxService) {

  $scope.cadastros = [];

  $scope.create = function (cadastro) {
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

});