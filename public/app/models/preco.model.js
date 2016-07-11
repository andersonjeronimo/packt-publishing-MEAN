angular.module('angularApp').factory('precoModel', function (ajax, $q) {
  
  var service = {
    URL: 'http://localhost:3000/precos/',
    listaPrecos: function () {
      var defer = $q.defer();
      ajax.listEntities(service.URL).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    inserePrecos: function () {
      var defer = $q.defer();
      var preco = {};
      ajax.createEntity(service.URL, preco).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    atualizaPrecos: function (preco) {
      var defer = $q.defer();
      ajax.updateEntity(service.URL, preco).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    }
  };

  return service;
  
});