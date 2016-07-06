angular.module('angularApp').factory('cadastroDiversaoModel', function (ajax, $location) {

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
      diversao.inicio = new Date().setHours(diversao.tempo.inicio.hora, diversao.tempo.inicio.minuto, 59, 999);
      diversao.fim = new Date().setHours(diversao.tempo.fim.hora, diversao.tempo.fim.minuto, 59, 999);            
      if (diversao.inicio < diversao.fim) {
        diversao.iniciada = true;
        
        //calcular valor

        ajax.updateEntity(URL_DIV, diversao).success(function (data) {
          service.alerta = data.nomeCrianca + ' divertindo-se agora!';
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
    this.nomeCrianca = cadastro.nomeCrianca;
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
        service.alerta = cadastro.nomeCrianca + ' aguardando para brincar...';
        $location.path('/diversoes');
      });
    }
  }

  function _adicionaCadastro(cadastro) {
    cadastro.brincando = false;
    var data_str = cadastro.dataNascimentoStr;
    var dia, mes, ano;
    dia = data_str.substring(0, 2);
    mes = data_str.substring(2, 4);
    ano = data_str.substring(4);
    cadastro.dataNascimento = new Date(ano, mes - 1, dia);
    ajax.createEntity(URL_CAD, cadastro).success(function (data) {
      //outra estratégia é chamar service.listaCadastros();
      service.cadastros.push(data);
      service.alerta = data.nomeCrianca + " adicionado(a) com sucesso!";
    });
  }

  function _buscaCadastro(id) {
    ajax.readEntity(URL_CAD, id).success(function (data) {
      service.cadastro = data;
    });
  }

  function _atualizaCadastro(cadastro) {
    if (!(cadastro.brincando)) {
      var data_str = cadastro.dataNascimentoStr;
      var dia, mes, ano;
      dia = data_str.substring(0, 2);
      mes = data_str.substring(2, 4);
      ano = data_str.substring(4);
      cadastro.dataNascimento = new Date(ano, mes - 1, dia);
      ajax.updateEntity(URL_CAD, cadastro).success(function (data) {
        service.listaCadastros();
        service.alerta = cadastro.nomeCrianca + " teve seus dados atualizados com sucesso!";
      });
    } else {
      service.alerta = cadastro.nomeCrianca + " possui um sessão iniciada! Não é possível atualizar seu cadastro neste momento.";
    }
  }

  function _removeCadastro(cadastro) {
    if (!(cadastro.brincando)) {
      if (confirm('Deseja remover o cadastro de ' + cadastro.nomeCrianca + ' ?')) {
        ajax.deleteEntity(URL_CAD, cadastro).success(function (data) {
          service.listaCadastros();
          service.alerta = "Cadastro removido com sucesso.";
        });
      }
    } else {
      service.alerta = cadastro.nomeCrianca + " possui um sessão iniciada! Não é possível remover seu cadastro neste momento.";
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