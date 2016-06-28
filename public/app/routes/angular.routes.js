angular.module('angularApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/diversao.html',
      controller: 'diversoesController'
    })    
    .when('/cadastros', {
      templateUrl: 'app/views/cadastro.html',
      controller: 'cadastrosController'
    })
    .when('/precos', {
      templateUrl: 'app/views/precos.html',
      controller: 'mainController'
    })
    .when('/clientes', {
      templateUrl: 'app/views/clientes.html',
      controller: 'cadastrosController'
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
