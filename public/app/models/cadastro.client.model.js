angular.module('angularApp').factory('cadastroModel', function (ajax) {

  var URL_CAD = 'http://localhost:3000/cadastros/';

  function _listaCadastros() {
    ajax.listEntities(URL_CAD).success(function (data) {
      service.cadastros.length = 0;
      service.cadastros = data;
    });
  };

  var Diversao = function (cadastro) {
    this.inicio = new Date();
    this.fim = new Date();
    this.iniciada = false;
    this.finalizada = false;
    this.paga = false;
    this.formaPagamento = '';
    this.adicional = false;
    this.valorPago = 0;
    this.valorFinal = 0;
    this.desconto = 0;
    this.troco = 0;
    this.registerID = cadastro;
  };

  function _adicionaDiversao(cadastro) {
    if (cadastro.brincando) {
      window.alert('Sessão já iniciada.');
    } else {
      var diversao = new Diversao(cadastro);
      ajax.createEntity('http://localhost:3000/diversoes/', diversao).success(function (data) {
        //_diversoes.push(data);
      });

      cadastro.brincando = true;
      ajax.updateEntity(URL_CAD, cadastro).success(function (data) {
        service.listaCadastros();
      });
    }
  }

  function _adicionaCadastro(cadastro) {
    cadastro.brincando = false;
    ajax.createEntity(URL_CAD, cadastro).success(function (data) {
      service.cadastros.push(data);
    });
  }

  function _buscaCadastro(id) {
    ajax.readEntity(URL_CAD, id).success(function (data) {
      service.cadastro = data;
    });
  }

  function _atualizaCadastro(cadastro) {
    if (!(cadastro.brincando)) {

      ajax.updateEntity(URL_CAD, cadastro).success(function (data) {
        service.listaCadastros();
      });
    } else {
      window.alert("Sessão iniciada. Não é possível atualizar este cadastro.");
    }
  }

  function _removeCadastro(cadastro) {
    if (!(cadastro.brincando)) {
      ajax.deleteEntity(URL_CAD, cadastro).success(function (data) {
        service.listaCadastros();
      });
    } else {
      window.alert("Sessão iniciada. Não é possível remover este cadastro.");
    }
  }

  var service = {
    titulo: 'Cadastros',
    cadastros: new Array,
    cadastro: null,
    adicionaDiversao: _adicionaDiversao,
    adicionaCadastro: _adicionaCadastro,
    listaCadastros: _listaCadastros,
    buscaCadastro: _buscaCadastro,
    atualizaCadastro: _atualizaCadastro,
    removeCadastro: _removeCadastro
  };

  return service;

});