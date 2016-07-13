angular.module('angularApp').factory('diversaoModel', function (ajax, $q) {

  var URL = 'http://localhost:3000/diversoes/';

  function _listaDiversoes() {
    var defer = $q.defer();
    ajax.listEntities(URL).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;
  }

  function _cancelaDiversao(diversao) {
    var defer = $q.defer();
    ajax.deleteEntity(URL, diversao).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;
  }

  function _iniciaDiversao(diversao) {    
    var defer = $q.defer();
    diversao.iniciada = true;
    ajax.updateEntity(URL, diversao).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;     
  }

  function _adicionaTempo(diversao, minutos) {    
    var defer = $q.defer();
    var millis = Date.parse(diversao.fim);
    millis += minutos * 60000;
    diversao.fim = new Date(millis);
    ajax.updateEntity(URL, diversao).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;
  }

  function _diminuiTempo(diversao, minutos) {    
    var defer = $q.defer();
    var millis = Date.parse(diversao.fim);
    millis -= minutos * 60000;
    diversao.fim = new Date(millis);
    ajax.updateEntity(URL, diversao).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;     
  }

  function _finalizaDiversao(diversao) {    
    var defer = $q.defer();
    diversao.finalizada = true;
    ajax.updateEntity(URL, diversao).success(function (data) {
      defer.resolve(data);      
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;    
  }    
    
  var Diversao = function (cadastro) {
    this.inicio = new Date();
    this.fim = new Date();
    this.iniciada = false;
    this.finalizada = false;
    this.paga = false;
    this.formaPagamento = '';
    this.valorPago = 0;
    this.valorFinal = 0;
    this.nomeCrianca = cadastro.nomeCrianca;
    this.registerID = cadastro;
  };

  function _adicionaDiversao(cadastro) {    
    var defer = $q.defer();
    var diversao = new Diversao(cadastro);
    ajax.createEntity(URL, diversao).success(function (data) {
      defer.resolve(data);
    }).error(function (data) {
      defer.reject(data);
    });
    return defer.promise;    
  }

  var service = {
    adicionaDiversao: _adicionaDiversao,
    adicionaTempo: _adicionaTempo,
    diminuiTempo: _diminuiTempo,
    iniciaDiversao: _iniciaDiversao,
    cancelaDiversao: _cancelaDiversao,
    finalizaDiversao: _finalizaDiversao,
    listaDiversoes: _listaDiversoes
  };

  return service;

});