angular.module('angularApp').controller('cadastrosController', function ($scope, view, cadastroModel, telefoneFilter, precoModel) {

  $scope.model = cadastroModel;
  $scope.view = view;
  // $scope.preco = {};  
  // 
  // precoModel.listaPrecos().then(function (data) {
  //   if (data.length > 0) {
  //     $scope.preco = data[0];
  //   } else {
  //     precoModel.inserePrecos().then(function (data) {
  //       $scope.preco = data;
  //     });
  //   }
  // });

  $scope.adicionaCadastro = function (cadastro) {
    cadastroModel.adicionaCadastro(cadastro);
    delete $scope.cadastro;
  };

  cadastroModel.listaCadastros();  

});