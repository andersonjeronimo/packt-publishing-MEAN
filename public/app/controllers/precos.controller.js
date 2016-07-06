angular.module('angularApp').controller('precosController', function ($scope, precoModel) {

  $scope.preco = {};
  $scope.precoMinuto = 0;
  
  $scope.model = precoModel;  

  $scope.listaPrecos = function () {
    precoModel.listaPrecos().then(function (data) {
      if (data.length > 0) {
        $scope.preco = data[0];        
      } else {
        precoModel.inserePrecos().then(function (data) {
          $scope.preco = data;                    
        });
      }
    });
  };

  $scope.atualizaPrecos = function (preco) {
    precoModel.atualizaPrecos(preco).then(function (data) {      
      $scope.listaPrecos();
      $scope.model.alerta = 'Preços atualizados com sucesso!';      
    });
  };
  
  $scope.listaPrecos();  

});