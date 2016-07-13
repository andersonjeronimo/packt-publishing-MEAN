angular.module('angularApp').controller('cadastrosController', function ($scope, $location, view, cadastroModel, diversaoModel, telefoneFilter) {

  $scope.view = view;
  $scope.cadastros = [];  
  $scope.alerta = 'Alertas aqui...';

  $scope.adicionaCadastro = function (cadastro) {
    cadastroModel.adicionaCadastro(cadastro).then(function (data) {
      $scope.alerta = data.nomeCrinca + ' cadastrado(a) com sucesso!';
      $scope.cadastros.push(data);
      delete $scope.cadastro;      
    });
     
  };

  function listaCadastros() {
    cadastroModel.listaCadastros().then(function (data) {
      $scope.cadastros.length = 0;
      $scope.cadastros = data;
    });
  }

  $scope.atualizaCadastro = function (cadastro) {
    cadastroModel.atualizaCadastro(cadastro).then(function () {
      $scope.alerta = cadastro.nomeCrinca + ' teve seus dados atualizados com sucesso!';
      listaCadastros();
    });
  };

  $scope.adicionaDiversao = function (cadastro) {
    diversaoModel.adicionaDiversao(cadastro).then(function () {
      cadastro.brincando = true;
      cadastroModel.atualizaCadastro(cadastro).then(function () {
        $scope.alerta = cadastro.nomeCrinca + ' está aguardando início da sessão! Iniciar diversão!.';
        listaCadastros();
        $location.path('/diversoes');
      });      
    });
  };

  $scope.removeCadastro = function (cadastro) {
    cadastroModel.removeCadastro(cadastro).then(function () {
      $scope.alerta = 'Cadastro removido com sucesso.';
      listaCadastros();
    });
  };

  listaCadastros();

});