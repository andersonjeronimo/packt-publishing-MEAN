angular.module('angularApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'mainController'
    })
    .when('/diversoes', {
      templateUrl: 'app/views/diversao.html',
      controller: 'diversoesController'
    })
    .when('/cadastros', {
      templateUrl: 'app/views/cadastro.html',
      controller: 'cadastrosController'
    })
    .when('/precos', {
      templateUrl: 'app/views/precos.html',
      controller: 'precosController'     
    })
    .when('/clientes', {
      templateUrl: 'app/views/clientes.html',
      controller: 'cadastrosDiversoesCtrl'
    })
    .when('/despesas', {
      templateUrl: 'app/views/despesas.html',
      controller: 'mainController'
    })
    .when('/relatorios', {
      templateUrl: 'app/views/relatorio.html',
      controller: 'mainController'
    });
});
