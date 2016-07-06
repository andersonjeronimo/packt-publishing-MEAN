angular.module('angularApp').factory('precoModel', function (ajax, $q) {
  var URL_PRECO = 'http://localhost:3000/precos/';
  
  var service = {
    alerta:'Alertas aqui...',
    listaPrecos: function () {
      var defer = $q.defer();
      ajax.listEntities(URL_PRECO).success(function (data) {
        defer.resolve(data);       
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    inserePrecos: function () {
      var defer = $q.defer();
      var preco = {};
      ajax.createEntity(URL_PRECO, preco).success(function (data) {
        defer.resolve(data);        
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    atualizaPrecos: function (preco) {
      var defer = $q.defer();
      ajax.updateEntity(URL_PRECO, preco).success(function (data) {
        defer.resolve(data);        
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    }
  };
  
  return service;
});