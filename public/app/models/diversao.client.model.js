angular.module('angularApp').factory('diversaoModel', function (ajax) {

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
        console.log(data);
        ajax.readEntity('http://localhost:3000/cadastros/', cadastroID).success(function (cadastro) {
          console.log(cadastro);
          cadastro.brincando = false;
          ajax.updateEntity('http://localhost:3000/cadastros/', cadastro).success(function (data) {
            console.log(data);
            service.listaDiversoes();
            //_listaCadastros();
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

        ajax.updateEntity(URL_DIV, diversao).success(function (data) {
          console.log(data);
        });
      } else {
        window.alert("Hora final deve ser maior que hora inicial");
      }
    }
  }



  var service = {
    titulo: 'Playground',
    diversoes: new Array,
    diversao: null,
    iniciaDiversao: _iniciaDiversao,
    cancelaDiversao: _cancelaDiversao,
    listaDiversoes: _listaDiversoes
  };

  return service;

});