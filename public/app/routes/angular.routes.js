angular.module('angularApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'mainController'
    })
    .when('/diversoes', {
      templateUrl: 'app/views/diversao.html',
      controller: 'cadastrosDiversoesCtrl'
    })
    .when('/cadastros', {
      templateUrl: 'app/views/cadastro.html',
      controller: 'cadastrosDiversoesCtrl'
    })
    .when('/precos', {
      templateUrl: 'app/views/precos.html',
      controller: 'mainController'
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
