angular.module('angularApp').factory('diversionModelService', function (ajaxAPIService, utilsService) {

  var _diversoes = [];
  var _cadastros = [];

  var URL_CAD = 'http://localhost:3000/registers/';
  var URL_DIV = 'http://localhost:3000/diversions/';

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
  
  //cadastros===========================================  
  function _adicionaCadastro(cadastro) {
    
    
    //cadastro.brincando = false;
    ajaxAPIService.createEntity(URL_CAD, cadastro).success(function (data) {
      _cadastros.push(data);
    });
  }

  function _listaCadastros() {
    ajaxAPIService.listEntities(URL_CAD).success(function (data) {
      _cadastros.length = 0;
      _cadastros = data;
    });
  }

  function _buscaCadastro(id) {
    ajaxAPIService.readEntity(URL_CAD, id).success(function (data) {
      console.log(data);
    });
  }

  function _atualizaCadastro(cadastro) {
    if (!(cadastro.brincando)) {
      
      ajaxAPIService.updateEntity(URL_CAD, cadastro).success(function (data) {
        console.log(data);
        _listaCadastros();
      });
    } else {
      window.alert("Sessão iniciada. Não é possível atualizar este cadastro.");
    }
  }

  function _removeCadastro(cadastro) {
    if (!(cadastro.brincando)) {
      ajaxAPIService.deleteEntity(URL_CAD, cadastro).success(function (data) {
        console.log(data);
        _listaCadastros();
      });
    } else {
      window.alert("Sessão iniciada. Não é possível remover este cadastro.");
    }
  }
  
  //diversoes=====================================================  
  function _adicionaDiversao(cadastro) {
    if (cadastro.brincando) {
      window.alert('Sessão já iniciada.');
    } else {
      var diversao = new Diversao(cadastro);
      ajaxAPIService.createEntity(URL_DIV, diversao).success(function (data) {
        _diversoes.push(data);
      });

      cadastro.brincando = true;
      ajaxAPIService.updateEntity(URL_CAD, cadastro).success(function (data) {
        console.log(data);
        this._listaCadastros();
      });
    }
  }

 
  
  //diversoes
  function _listaDiversoes() {
    ajaxAPIService.listEntities(URL_DIV).success(function (data) {
      _diversoes.length = 0;
      _diversoes = data;
    })
  }

  function _cancelaDiversao(diversao) {
    if (!(diversao.paga)) {
      var cadastroID = diversao.registerID;
      ajaxAPIService.deleteEntity(URL_DIV, diversao).success(function (data) {
        console.log(data);
        ajaxAPIService.readEntity(URL_CAD, cadastroID).success(function (cadastro) {
          console.log(cadastro);
          cadastro.brincando = false;
          ajaxAPIService.updateEntity(URL_CAD, cadastro).success(function (data) {
            console.log(data);
            _listaDiversoes();
            _listaCadastros();
          })
        });
      });
    } else {
      window.alert("Sessão já foi paga.");
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

        ajaxAPIService.updateEntity(URL_DIV, diversao).success(function (data) {
          console.log(data);
        });
      } else {
        window.alert("Hora final deve ser maior que hora inicial");
      }
    }
  }



  return {
    titulo : 'Playground',
    diversoes: _diversoes,
    cadastros: _cadastros,
    adicionaDiversao: _adicionaDiversao,
    iniciaDiversao: _iniciaDiversao,
    cancelaDiversao: _cancelaDiversao,
    listaCadastros : _listaCadastros,
    listaDiversoes : _listaDiversoes
  }

});