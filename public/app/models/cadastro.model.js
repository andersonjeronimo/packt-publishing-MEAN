angular.module('angularApp').factory('cadastroModel', function (ajax, $q) {
  
  var service = {
    URL: 'http://localhost:3000/cadastros/',
    listaCadastros: function () {
      var defer = $q.defer();
      ajax.listEntities(service.URL).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    adicionaCadastro: function (cadastro) {
      var defer = $q.defer();
      var data_str = cadastro.dataNascimentoStr;
      var dia, mes, ano;
      dia = data_str.substring(0, 2);
      mes = data_str.substring(2, 4);
      ano = data_str.substring(4);
      cadastro.dataNascimento = new Date(ano, mes - 1, dia);
      ajax.createEntity(service.URL, cadastro).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    buscaCadastro: function (id) {
      var defer = $q.defer();
      ajax.readEntity(service.URL, id).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    atualizaCadastro: function (cadastro) {
      var defer = $q.defer();
      var data_str = cadastro.dataNascimentoStr;
      var dia, mes, ano;
      dia = data_str.substring(0, 2);
      mes = data_str.substring(2, 4);
      ano = data_str.substring(4);
      cadastro.dataNascimento = new Date(ano, mes - 1, dia);
      ajax.updateEntity(service.URL, cadastro).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    },
    removeCadastro: function (cadastro) {
      var defer = $q.defer();
      ajax.deleteEntity(service.URL, cadastro).success(function (data) {
        defer.resolve(data);
      }).error(function (data) {
        defer.reject(data);
      });
      return defer.promise;
    }
  };

  return service;

});