angular.module('angularApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/diversao.html',
      controller: 'registerController'
    })    
    .when('/cadastro', {
      templateUrl: 'app/views/cadastro.html',
      controller: 'registerController'
    })
    .when('/precos', {
      templateUrl: 'app/views/precos.html',
      controller: 'mainController'
    })
    .when('/clientes', {
      templateUrl: 'app/views/clientes.html',
      controller: 'registerController'
    })
    .when('/despesas', {
      templateUrl: 'app/views/despesas.html',
      controller: 'mainController'
    })
    .when('/relatorio', {
      templateUrl: 'app/views/relatorio.html',
      controller: 'mainController'
    });
});
