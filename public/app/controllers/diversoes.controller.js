angular.module('angularApp').controller('diversoesController', function ($scope, view, diversaoModel, telefoneFilter, precoModel) {

  $scope.model = diversaoModel;
  $scope.view = view; 

  // precoModel.listaPrecos().then(function (data) {
  //   if (data.length > 0) {
  //     $scope.preco = data[0];
  //   } else {
  //     precoModel.inserePrecos().then(function (data) {
  //       $scope.preco = data;
  //     });
  //   }
  // }); 

  $scope.iniciaDiversao = function (diversao) {
    diversao.tempo = angular.copy(view.tempo);
    diversaoModel.iniciaDiversao(diversao);
  };
  
  diversaoModel.listaDiversoes();

});