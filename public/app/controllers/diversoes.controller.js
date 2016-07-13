angular.module('angularApp').controller('diversoesController', function ($scope, view, diversaoModel, cadastroModel, telefoneFilter, precoModel) {

  $scope.view = view;
  $scope.alerta = 'Alertas aqui...';
  $scope.diversoes = [];

  $scope.preco = {};

  precoModel.listaPrecos().then(function (data) {
    if (data.length > 0) {
      $scope.preco = data[0];
    } else {
      precoModel.inserePrecos().then(function (data) {
        $scope.preco = data;
      });
    }
  });
  
  function listaDiversoes() {
    diversaoModel.listaDiversoes().then(function (data) {
      $scope.diversoes.length = 0;
      $scope.diversoes = data;
    });
  }
  
   $scope.cancelaDiversao = function (diversao) {
    diversaoModel.cancelaDiversao(diversao).then(function (data) {
      var id = data.registerID;
      listaDiversoes()
      cadastroModel.buscaCadastro(id).then(function (data) {
        var cadastro = data;
        cadastro.brincando = false;
        cadastroModel.atualizaCadastro(cadastro);
      });
    });
  };

  $scope.iniciaDiversao = function (diversao) {
    var tempo = angular.copy(view.tempo);
    var inicio = new Date().setHours(tempo.inicio.hora, tempo.inicio.minuto);
    var fim = new Date().setHours(tempo.fim.hora, tempo.fim.minuto);
    if (inicio < fim) {
      diversao.inicio = inicio;
      diversao.fim = fim;
      diversaoModel.iniciaDiversao(diversao).then(function () {
        $scope.alerta = diversao.nomeCrianca + ' divertindo-se agora!';
        listaDiversoes();
      });
    } else {
      $scope.alerta = 'Tempo final deve ser maior que hora inicial';
    }
  }; 
  
  $scope.adicionaTempo = function (diversao, minutos) {
    diversaoModel.adicionaTempo(diversao, minutos).then(function () {
      $scope.alerta = 'Tempo adicionado.';
      listaDiversoes();
    });
  };
  
  //resolver questão do tempo final < tempo inicial : limitar ação do usuário para evitar este cenário
  $scope.diminuiTempo = function (diversao, minutos) {
    diversaoModel.diminuiTempo(diversao, minutos).then(function () {
      $scope.alerta = 'Tempo diminuído em 15 minutos.';
      listaDiversoes();
    });
  };
  
  $scope.finalizaDiversao = function (diversao) {
    //diversaoModel.finalizaDiversao(diversao).then(function (data) {
    //  var id = data.registerID;
    //  listaDiversoes()
    //  cadastroModel.buscaCadastro(id).then(function (data) {
    //    var cadastro = data;
    //    cadastro.brincando = false;
    //    cadastroModel.atualizaCadastro(cadastro);
    //  });
    //});    
  };
    

  listaDiversoes()

});