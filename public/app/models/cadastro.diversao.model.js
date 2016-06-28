angular.module('angularApp').factory('cadastroDiversaoModel', function (ajax) {

  var URL_CAD = 'http://localhost:3000/cadastros/';
  var URL_DIV = 'http://localhost:3000/diversoes/';

  function _listaDiversoes() {
    ajax.listEntities(URL_DIV).success(function (data) {
      service.diversoes.length = 0;
      service.diversoes = data;
    })
  }

  function _cancelaDiversao(diversao) {
    if (!(diversao.paga)) {
      var cadastroID = diversao.registerID;
      ajax.deleteEntity(URL_DIV, diversao).success(function (data) {
        ajax.readEntity(URL_CAD, cadastroID).success(function (cadastro) {
          cadastro.brincando = false;
          ajax.updateEntity(URL_CAD, cadastro).success(function (data) {
            service.listaDiversoes();
            service.listaCadastros();
          })
        });
      });
    } else {
      service.alerta = "Sessão já foi paga.";
    }
  }

  function _iniciaDiversao(diversao) {
    if (!(diversao.iniciada)) {
      if (true) { //se a hora é válida
        diversao.iniciada = true;

        var inicio = new Date();

        var fim = new Date();

        diversao.inicio = inicio;
        diversao.fim = fim;
        

        //         var minuto_milis = 60000;
        // 
        //         var tempo_total_milis = fim.getTime() - inicio.getTime();
        //         var tempo_total_min = tempo_total_milis / minuto_milis;
        //         
        //         var valor_minuto = $scope.model.config[$scope.model.config.length - 1].valor_hora / 60;
        // var valor_total = Math.round(valor_minuto * tempo_total_min);
        // var valor_total = valor_minuto * tempo_total_min;

        // cadastro.historico[last_index].valor_total = valor_total;
        // cadastro.historico[last_index].valor_final = valor_total;

        ajax.updateEntity(URL_DIV, diversao).success(function (data) {
          console.log(data);
        });
      } else {
        service.alerta = "Hora final deve ser maior que hora inicial";
      }
    }
  }
  
  //=========================================================================================  
    
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

  function _listaCadastros() {
    ajax.listEntities(URL_CAD).success(function (data) {
      service.cadastros.length = 0;
      service.cadastros = data;
    });
  };

  function _adicionaDiversao(cadastro) {
    if (cadastro.brincando) {
      service.alerta = 'Sessão já iniciada.';
    } else {
      var diversao = new Diversao(cadastro);
      ajax.createEntity(URL_DIV, diversao).success(function (data) {
        service.listaDiversoes();
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
      //outra estratégia é chamar service.listaCadastros();
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
      service.alerta = "Sessão iniciada. Não é possível atualizar este cadastro.";
    }
  }

  function _removeCadastro(cadastro) {
    if (!(cadastro.brincando)) {
      ajax.deleteEntity(URL_CAD, cadastro).success(function (data) {
        service.listaCadastros();
      });
    } else {
      service.alerta = "Sessão iniciada. Não é possível remover este cadastro.";
    }
  }

  var service = {
    cadastros: new Array,
    cadastro: null,
    adicionaDiversao: _adicionaDiversao,
    adicionaCadastro: _adicionaCadastro,
    listaCadastros: _listaCadastros,
    buscaCadastro: _buscaCadastro,
    atualizaCadastro: _atualizaCadastro,
    removeCadastro: _removeCadastro,
    diversoes: new Array,
    diversao: null,
    iniciaDiversao: _iniciaDiversao,
    cancelaDiversao: _cancelaDiversao,
    listaDiversoes: _listaDiversoes,
    alerta: 'Alertas aqui...'
  };

  return service;

});